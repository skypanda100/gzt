<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/12
 * Time: 20:59
 */
require_once "../../db/pgsql.php";

$db = new pgsql("127.0.0.1", "5432", "postgres", "postgres", "123456");
//$db = new pgsql("192.168.233.138", "15432", "postgres", "postgres", "123456");

$db->connect();
$sql = "";

$sql = "select * from status_sleep order by date";

$gg_day = 0;
$gg_deep = 0;
$gg_shallow = 0;
$zdt_day = 0;
$zdt_deep = 0;
$zdt_shallow = 0;

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
        $gg_day += 1;
        $gg_deep += $deep / 60 / 60.0;
        $gg_shallow += $shallow / 60 / 60.0;
    }
    else
    {
        $zdt_day += 1;
        $zdt_deep += $deep / 60 / 60.0;
        $zdt_shallow += $shallow / 60 / 60.0;
    }
}

$db->free();

$data_r = array("gg_day" => $gg_day
, "gg_deep_average" => $gg_deep / $gg_day
, "gg_deep_total" => $gg_deep
, "gg_deep_day" => $gg_deep / 24
, "gg_sleep_average" => ($gg_deep + $gg_shallow) / $gg_day
, "gg_sleep_total" => ($gg_deep + $gg_shallow)
, "gg_sleep_day" => ($gg_deep + $gg_shallow) / 24
, "zdt_day" => $zdt_day
, "zdt_deep_average" => $zdt_deep / $zdt_day
, "zdt_deep_total" => $zdt_deep
, "zdt_deep_day" => $zdt_deep / 24
, "zdt_sleep_average" => ($zdt_deep + $zdt_shallow) / $zdt_day
, "zdt_sleep_total" => ($zdt_deep + $zdt_shallow)
, "zdt_sleep_day" => ($zdt_deep + $zdt_shallow) / 24
);

header("content-type:application/json");
header('Access-Control-Allow-Origin:*');

echo json_encode($data_r);
?>