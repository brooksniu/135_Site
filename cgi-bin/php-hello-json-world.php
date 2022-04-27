<?php 
header("Cache-Control: no-cache");
header("Content-type: text/html");
$date = date("Y-m-d h:i:sa");
$address = $_SERVER["REMOTE_ADDR"];
$msg = array('title' => 'Hello, PHP!', 'heading' => 'Hello, PHP!', 'message' => 'This page was generated with the PHP programming language', 'time' => $date, 'IP' => $address);
print (json_encode($msg));
?>
