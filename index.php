<?php

$time_s = "2017-02-05";
$time = strtotime($time_s);
echo date("w", $time) . "</br>";
echo date("m", $time) . "</br>";
echo strftime("%Y-%m-%d", $time). "</br>";
echo date("t", $time). "</br>";
echo date("d", $time). "</br>";

?>