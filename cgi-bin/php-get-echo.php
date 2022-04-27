<?php 
header("Cache-Control: no-cache");
header("Content-type: text/html");
?>
<!DOCTYPE html>
<html><head><title>GET Request Echo</title>
</head><body><h1 align="center">Get Request Echo</h1>
<hr>
<b>Query String: </b><?php print $_SERVER["QUERY_STRING"] ?><br />
<b>Parsed_String: <b><br />
<?php 
parse_str($_SERVER["QUERY_STRING"], $parsed);
foreach ($parsed as $key=>$value) {
    print ("<b>$key : </b> $value<br />\n");
}
?>
</body></html>