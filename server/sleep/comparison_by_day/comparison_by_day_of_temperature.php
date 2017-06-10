<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/26
 * Time: 19:59
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

$db = new pgsql("192.168.1.3", "15432", "postgres", "postgres", "123456");
//$db = new pgsql("192.168.233.138", "15432", "postgres", "postgres", "123456");

$db->connect();
$sql = "";
if(!is_null($start_date) && !is_null($end_date))
{
    $sql = "select * from status_sleep where date >= '$start_date'and date <= '$end_date'order by date desc limit 2";

}
else if(!is_null($start_date) && is_null($end_date))
{
    $sql = "select * from status_sleep where date >= '$start_date' order by date desc limit 2";
}
else if(is_null($start_date) && !is_null($end_date))
{
    $sql = "select * from status_sleep where date <= '$end_date'order by date desc limit 2";
}
else
{
    $sql = "select * from status_sleep order by date desc limit 2";
}


$s_date = null;
$e_date = null;
$gg_date_r = array();
$gg_deep_r = array();
$gg_shallow_r = array();
$zdt_date_r = array();
$zdt_deep_r = array();
$zdt_shallow_r = array();

$result = $db->query($sql);
while(($row = $db->fetchRow()) != NULL)
{
    $person = $row[0];
    $date = $row[1];
    $start = $row[2];
    $end = $row[3];
    $deepStart01 = $row[4];
    $deepEnd01 = $row[5];
    $deepStart02 = $row[6];
    $deepEnd02 = $row[7];
    $deepStart03 = $row[8];
    $deepEnd03 = $row[9];
    $deepStart04 = $row[10];
    $deepEnd04 = $row[11];
    $deepStart05 = $row[12];
    $deepEnd05 = $row[13];
    $deepStart06 = $row[14];
    $deepEnd06 = $row[15];
    $deepStart07 = $row[16];
    $deepEnd07 = $row[17];
    $deepStart08 = $row[18];
    $deepEnd08 = $row[19];
    $deepStart09 = $row[20];
    $deepEnd09 = $row[21];
    $deepStart10 = $row[22];
    $deepEnd10 = $row[23];
    $awakeStart01 = $row[24];
    $awakeEnd01 = $row[25];
    $awakeStart02 = $row[26];
    $awakeEnd02 = $row[27];
    $awakeStart03 = $row[28];
    $awakeEnd03 = $row[29];
    $awakeStart04 = $row[30];
    $awakeEnd04 = $row[31];

    $sum = strtotime($end) - strtotime($start);

    $deep = strtotime($deepEnd01) - strtotime($deepStart01);
    $deep += strtotime($deepEnd02) - strtotime($deepStart02);
    $deep += strtotime($deepEnd03) - strtotime($deepStart03);
    $deep += strtotime($deepEnd04) - strtotime($deepStart04);
    $deep += strtotime($deepEnd05) - strtotime($deepStart05);
    $deep += strtotime($deepEnd06) - strtotime($deepStart06);
    $deep += strtotime($deepEnd07) - strtotime($deepStart07);
    $deep += strtotime($deepEnd08) - strtotime($deepStart08);
    $deep += strtotime($deepEnd09) - strtotime($deepStart09);
    $deep += strtotime($deepEnd10) - strtotime($deepStart10);

    $awake = strtotime($awakeEnd01) - strtotime($awakeStart01);
    $awake += strtotime($awakeEnd02) - strtotime($awakeStart02);
    $awake += strtotime($awakeEnd03) - strtotime($awakeStart03);
    $awake += strtotime($awakeEnd04) - strtotime($awakeStart04);

    $shallow = $sum - $deep - $awake;

    $date_s = substr($date, 0, 10);

    if($person == 0)
    {
        array_push($gg_date_r, $date_s);
        array_push($gg_deep_r, $deep / 60 / 60.0);
        array_push($gg_shallow_r, $shallow / 60 / 60.0);
    }
    else
    {
        array_push($zdt_date_r, $date_s);
        array_push($zdt_deep_r, $deep / 60 / 60.0);
        array_push($zdt_shallow_r, $shallow / 60 / 60.0);
    }

    if(is_null($s_date))
    {
        $s_date = strtotime($date);
    }
    else
    {
        $e_date = strtotime($date);
    }
}

$db->free();

//day
$date_day_r = array();
$gg_deep_day_r = array();
$gg_shallow_day_r = array();
$zdt_deep_day_r = array();
$zdt_shallow_day_r = array();

$tmp_date = $s_date;
$day_seconds = 24 * 60 * 60;
do{
    $date_day = date("d", $tmp_date);
    $date = strftime("%Y-%m-%d", $tmp_date);
    $tmp_gg_deep = 0;
    $tmp_gg_shallow = 0;
    $tmp_zdt_deep = 0;
    $tmp_zdt_shallow = 0;

    //day
    if(in_array($date, $gg_date_r, true))
    {
        $index = array_search($date, $gg_date_r, true);
        $tmp_gg_deep = $gg_deep_r[$index];
        $tmp_gg_shallow = $gg_shallow_r[$index];
    }

    if(in_array($date, $zdt_date_r, true))
    {
        $index = array_search($date, $zdt_date_r, true);
        $tmp_zdt_deep = $zdt_deep_r[$index];
        $tmp_zdt_shallow = $zdt_shallow_r[$index];
    }

    array_push($date_day_r, $date);
    array_push($gg_deep_day_r, $tmp_gg_deep);
    array_push($gg_shallow_day_r, $tmp_gg_shallow);
    array_push($zdt_deep_day_r, $tmp_zdt_deep);
    array_push($zdt_shallow_day_r, $tmp_zdt_shallow);

    $tmp_date = $tmp_date + $day_seconds;
}
while(($tmp_date - $e_date) <= 0);


$data_r = array("date_day" => $date_day_r
                , "gg_deep_day" => $gg_deep_day_r
                , "gg_shallow_day" => $gg_shallow_day_r
                , "zdt_deep_day" => $zdt_deep_day_r
                , "zdt_shallow_day" => $zdt_shallow_day_r
                );

header("content-type:application/json");
header('Access-Control-Allow-Origin:*');

echo json_encode($data_r);
?>