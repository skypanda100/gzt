<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/15
 * Time: 15:42
 */

require_once "../../db/pgsql.php";

$start_date = null;
if(isset($_POST["start_date"]))
{
    $start_date = $_POST["start_date"];
}

$end_date = null;
if(isset($_POST["end_date"]))
{
    $end_date = $_POST["end_date"];
}

$sql = "";
if(is_null($start_date) && is_null($end_date)){
    $start_date = date('Y-m-d H:i:s',strtotime('-3 hour'));
    $end_date = date('Y-m-d H:i:s');
    $sql = "select * from serial where datetime >= '$start_date'and datetime <= '$end_date'order by datetime asc";
}else if(!is_null($start_date) && is_null($end_date)){
    $sql = "select * from serial where datetime >= '$start_date'order by datetime asc";
}else if(is_null($start_date) && !is_null($end_date)){
    $sql = "select * from serial where datetime <= '$end_date'order by datetime asc";
}else if(!is_null($start_date) && !is_null($end_date)) {
    $sql = "select * from serial where datetime >= '$start_date'and datetime <= '$end_date'order by datetime asc";
}

$datetime_r = array();
$temp_r = array();
$humidity_r = array();
$pm25_r = array();
$co2_r = array();
$hcho_r = array();

$db = new pgsql("192.168.1.3", "15432", "postgres", "postgres", "123456");
//$db = new pgsql("192.168.233.138", "15432", "postgres", "postgres", "123456");

$db->connect();

$result = $db->query($sql);
while(($row = $db->fetchRow()) != NULL) {
    array_push($datetime_r, $row[0]);
    array_push($temp_r, $row[5]);
    array_push($humidity_r, $row[6]);
    array_push($pm25_r, $row[2]);
    array_push($co2_r, $row[1]);
    array_push($hcho_r, $row[4]);
}
$db->free();

$data_r = array("datetime" => $datetime_r
, "temp" => $temp_r
, "humidity" => $humidity_r
, "pm25" => $pm25_r
, "co2" => $co2_r
, "hcho" => $hcho_r
);

header("content-type:application/json");
header('Access-Control-Allow-Origin:*');
//header('Access-Control-Allow-Methods:POST');

echo json_encode($data_r);
?>