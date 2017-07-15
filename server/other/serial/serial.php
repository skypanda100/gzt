<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/14
 * Time: 21:21
 */

require_once "../../db/pgsql.php";

$data = null;
if(isset($_POST["data"]))
{
    $data = $_POST["data"];
}
if(!is_null($data)){
    $data_r = explode(",", $data);
    if(count($data_r) == 18){
        $db = new pgsql("192.168.1.3", "15432", "postgres", "postgres", "123456");
        //$db = new pgsql("192.168.233.138", "15432", "postgres", "postgres", "123456");

        $datetime = date('Y-m-d H:i:s');
        $sql = "insert into serial values("
            . "'$datetime',"
            . "$data_r[0],"
            . "$data_r[1],"
            . "$data_r[2],"
            . "$data_r[3],"
            . "$data_r[4],"
            . "$data_r[5],"
            . "$data_r[6],"
            . "$data_r[7],"
            . "$data_r[8],"
            . "$data_r[9],"
            . "$data_r[10],"
            . "$data_r[11],"
            . "$data_r[12],"
            . "$data_r[13],"
            . "$data_r[14],"
            . "$data_r[15],"
            . "$data_r[16],"
            . "$data_r[17]"
            . ")";

        $db->connect();
        $result = $db->query($sql);
        $db->free();

        //将PC客户端发过来的数据POST到端口2121
        $post_data['type'] = 'publish';
        $post_data['content'] = $data;
        $ch = curl_init();
        curl_setopt ($ch, CURLOPT_URL, "http://localhost:2121");
        curl_setopt ($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 5);
        curl_setopt($ch, CURLOPT_HEADER, false);
        $file_contents = curl_exec($ch);
        curl_close($ch);
    }
}

header("content-type:application/json");
header('Access-Control-Allow-Origin:*');
//header('Access-Control-Allow-Methods:POST');

echo json_encode($data);

?>