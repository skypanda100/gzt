<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/15
 * Time: 15:42
 */
$dir = dirname(__FILE__) . '/../../../screensaver';
$file_r = array();


if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== false) {
            if(is_file($dir . "/" . $file)){
                array_push($file_r, $file);
            }
        }
        closedir($dh);
    }
}


$data_r = array(
    "file" => $file_r
);

header("content-type:application/json");
header('Access-Control-Allow-Origin:*');
//header('Access-Control-Allow-Methods:POST');

echo json_encode($data_r);
?>