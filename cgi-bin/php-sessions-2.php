<?php 
header("Content-type: text/html");
if ($_COOKIE["PHPSESSID"] !== "" || $_COOKIE["PHPSESSID"] !== NULL) {
    session_id($_COOKIE["PHPSESSID"]);
}
session_start();
?>
<html>
<head>
<title>PHP Sessions</title>
</head>
<body>
<h1>PHP Sessions Page 2</h1>
<?php
$name = $_SESSION["username"];
if ($name !== NULL && strcmp($name, "") !== 0) {
    $_SESSION["username"] = $name;
    print ("<p><b>Name:</b> $name\n");
}
else {
    print ("<p><b>Name:</b> You do not have a name set</p>\n");
}
?>

<br/><br/>
<a href=/cgi-bin/php-sessions-1.php>Session Page 1</a><br/>
<a href=/php-cgiform.html>PHP CGI Form</a><br />
<form style=margin-top:30px action=/cgi-bin/php-destroy-session.php method=get>
<button type=submit>Destroy Session</button>
</form>

</body>
</html>