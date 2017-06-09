<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/9
 * Time: 19:05
 */
header("content-type:application/json");

require_once "../../db/pgsql.php";
/*
$person = null;
if(isset($_POST["person"]))
{
    $person = $_POST["person"];
}

$sleepDate = null;
if(isset($_POST["sleepDate"]))
{
    $sleepDate = $_POST["sleepDate"];
}

$sleepStart = null;
if(isset($_POST["sleepStart"]))
{
    $sleepStart = $_POST["sleepStart"];
}

$sleepEnd = null;
if(isset($_POST["sleepEnd"]))
{
    $sleepEnd = $_POST["sleepEnd"];
}

$deepSleepStart01 = null;
if(isset($_POST["deepSleepStart01"]))
{
    $deepSleepStart01 = $_POST["deepSleepStart01"];
}

$deepSleepEnd01 = null;
if(isset($_POST["deepSleepEnd01"]))
{
    $deepSleepEnd01 = $_POST["deepSleepEnd01"];
}

$deepSleepStart02 = null;
if(isset($_POST["deepSleepStart02"]))
{
    $deepSleepStart02 = $_POST["deepSleepStart02"];
}

$deepSleepEnd02 = null;
if(isset($_POST["deepSleepEnd02"]))
{
    $deepSleepEnd02 = $_POST["deepSleepEnd02"];
}

$deepSleepStart03 = null;
if(isset($_POST["deepSleepStart03"]))
{
    $deepSleepStart03 = $_POST["deepSleepStart03"];
}

$deepSleepEnd03 = null;
if(isset($_POST["deepSleepEnd03"]))
{
    $deepSleepEnd03 = $_POST["deepSleepEnd03"];
}

$deepSleepStart04 = null;
if(isset($_POST["deepSleepStart04"]))
{
    $deepSleepStart04 = $_POST["deepSleepStart04"];
}

$deepSleepEnd04 = null;
if(isset($_POST["deepSleepEnd04"]))
{
    $deepSleepEnd04 = $_POST["deepSleepEnd04"];
}

$deepSleepStart05 = null;
if(isset($_POST["deepSleepStart05"]))
{
    $deepSleepStart05 = $_POST["deepSleepStart05"];
}

$deepSleepEnd05 = null;
if(isset($_POST["deepSleepEnd05"]))
{
    $deepSleepEnd05 = $_POST["deepSleepEnd05"];
}

$deepSleepStart06 = null;
if(isset($_POST["deepSleepStart06"]))
{
    $deepSleepStart06 = $_POST["deepSleepStart06"];
}

$deepSleepEnd06 = null;
if(isset($_POST["deepSleepEnd06"]))
{
    $deepSleepEnd06 = $_POST["deepSleepEnd06"];
}

$deepSleepStart07 = null;
if(isset($_POST["deepSleepStart07"]))
{
    $deepSleepStart07 = $_POST["deepSleepStart07"];
}

$deepSleepEnd07 = null;
if(isset($_POST["deepSleepEnd07"]))
{
    $deepSleepEnd07 = $_POST["deepSleepEnd07"];
}

$deepSleepStart08 = null;
if(isset($_POST["deepSleepStart08"]))
{
    $deepSleepStart08 = $_POST["deepSleepStart08"];
}

$deepSleepEnd08 = null;
if(isset($_POST["deepSleepEnd08"]))
{
    $deepSleepEnd08 = $_POST["deepSleepEnd08"];
}

$deepSleepStart09 = null;
if(isset($_POST["deepSleepStart09"]))
{
    $deepSleepStart09 = $_POST["deepSleepStart09"];
}

$deepSleepEnd09 = null;
if(isset($_POST["deepSleepEnd09"]))
{
    $deepSleepEnd09 = $_POST["deepSleepEnd09"];
}

$deepSleepStart10 = null;
if(isset($_POST["deepSleepStart10"]))
{
    $deepSleepStart10 = $_POST["deepSleepStart10"];
}

$deepSleepEnd10 = null;
if(isset($_POST["deepSleepEnd10"]))
{
    $deepSleepEnd10 = $_POST["deepSleepEnd10"];
}

$awakeStart01 = null;
if(isset($_POST["awakeStart01"]))
{
    $awakeStart01 = $_POST["awakeStart01"];
}

$awakeEnd01 = null;
if(isset($_POST["awakeEnd01"]))
{
    $awakeEnd01 = $_POST["awakeEnd01"];
}

$awakeStart02 = null;
if(isset($_POST["awakeStart02"]))
{
    $awakeStart02 = $_POST["awakeStart02"];
}

$awakeEnd02 = null;
if(isset($_POST["awakeEnd02"]))
{
    $awakeStart02 = $_POST["awakeEnd02"];
}

$awakeStart03 = null;
if(isset($_POST["awakeStart03"]))
{
    $awakeStart03 = $_POST["awakeStart03"];
}

$awakeEnd03 = null;
if(isset($_POST["awakeEnd03"]))
{
    $awakeStart03 = $_POST["awakeEnd03"];
}

$awakeStart04 = null;
if(isset($_POST["awakeStart04"]))
{
    $awakeStart04 = $_POST["awakeStart04"];
}

$awakeEnd04 = null;
if(isset($_POST["awakeEnd04"]))
{
    $awakeStart04 = $_POST["awakeEnd04"];
}

$db = new pgsql("192.168.1.3", "15432", "postgres", "postgres", "123456");
//$db = new pgsql("192.168.233.138", "15432", "postgres", "postgres", "123456");

$db->connect();
$sql = "";*/
$ret = array();
$ret["person"] = $person;
$ret["sleepDate"] = $sleepDate;

echo json_encode($ret);
?>