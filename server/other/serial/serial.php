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

        $sql = "insert into serial values("
            . "now(),"
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
    }
}

header("content-type:application/json");
header('Access-Control-Allow-Origin:*');
//header('Access-Control-Allow-Methods:POST');

echo json_encode($data);

?>