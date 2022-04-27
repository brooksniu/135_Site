<?php 
header("Cache-Control: no-cache");
header("Content-type: text/html");
?>
<!DOCTYPE html>
<html><head><title>POST Request Echo</title>
</head><body><h1 align="center">POST Request Echo</h1>
<hr>
<b>Message Body: </b><br />
<b><?php
$entityBody = file_get_contents("php://input");
print $entityBody;
?><b><br />
</body></html>