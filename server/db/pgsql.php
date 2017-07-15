<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/25
 * Time: 15:13
 */
ini_set('date.timezone','Asia/Shanghai');

class pgsql
{
    // PostgreSQL连接标识符
    private $linkid;
    // PostgreSQL服务器主机
    private $host;
    // PostgreSQL服务器主机端口
    private $port;
    // PostgreSQL用户
    private $user;
    // PostgreSQL密码
    private $passwd;
    // Postgresql数据库
    private $db;
    // 查询的结果
    private $result;
    // erro
    private $error;
    /**
     * pgsql constructor.
     * @param $host
     * @param $port
     * @param $db
     * @param $user
     * @param $passwd
     */
    function __construct($host, $port, $db, $user, $passwd)
    {
        $this->host = $host;
        $this->port = $port;
        $this->db = $db;
        $this->user = $user;
        $this->passwd = $passwd;
    }

    /**
     * 连接Postgresql数据库
     */
    function connect()
    {
        try {
            $this->linkid = pg_connect("host=$this->host port=$this->port dbname=$this->db user=$this->user password=$this->passwd");
            if (!$this->linkid)
                throw new Exception("Could not connect to PostgreSQL server.");
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }

    /**
     * 执行数据库查询
     * @param $query
     * @return resource
     */
    function query($query)
    {
        try {
            $this->result = pg_query($this->linkid, $query);
            if (!$this->result)
                $this->error = "The database execute failed.";
        } catch (Exception $e) {
            $this->error = $e->getMessage();
        }
        return $this->result;
    }

    /**
     * 确定受查询所影响的行的总计
     * @return int
     */
    function affectedRows()
    {
        $count = @pg_affected_rows($this->linkid);
        return $count;
    }

    /**
     * 确定查询返回的行的总计
     * @return int
     */
    function numRows()
    {
        $count = @pg_num_rows($this->result);
        return $count;
    }

    /**
     * 将查询的结果行作为一个对象返回
     * @return object
     */
    function fetchObject()
    {
        $row = @pg_fetch_object($this->result);
        return $row;
    }

    /**
     * 将查询的结果行作为一个索引数组返回
     * @return array
     */
    function fetchRow()
    {
        $row = @pg_fetch_row($this->result);
        return $row;
    }

    /**
     * 将查询的结果行作为一个关联数组返回
     * @return array
     */
    function fetchArray()
    {
        $row = @pg_fetch_array($this->result);
        return $row;
    }

    /**
     * 释放查询的返回结果
     */
    function free()
    {
        pg_free_result($this->result);
    }

    /**
     * 错误信息
     * @return string
     */
    function lastError()
    {
        return $this->error;
    }
}
//这个DB类，一般不写析构（不释放资源）