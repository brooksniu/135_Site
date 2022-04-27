<?php 
header("Cache-Control: no-cache");
header("Content-type: text/html");
?>
<!DOCTYPE html>
<html><head><title>Environment Variables</title>
</head><body><h1 align="center">Environment Variables</h1>
<hr>
<h2>Environment Variables</h2>
<?php
$env_arr = getenv();
foreach ($env_arr as $key=>$value) {
    print ("<b>$key = </b> $value<br />\n");
}
?>
<h2>Server Variables</h2>
<?php
foreach ($_SERVER as $key=>$value) {
    print ("<b>$key = </b> $value<br />\n");
}
?>
</body></html>