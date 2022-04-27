<?php 
header("Content-type: text/html");
session_start();
?>
<html>
<head>
<title>PHP Sessions</title>
</head>
<body>
<h1>PHP Sessions Page 1</h1>
<?php
$old_name = "";
if ($_SESSION["username"] !== NULL || $_SESSION["username"] !== "") {
    $old_name = $_SESSION["username"];
}
$name = file_get_contents("php://input");
// store data in session variables
if ($name !== NULL && $name !== "") {
    $_SESSION["username"] = $name;
    print ("<p><b>Name:</b> $name\n");
}
else if ($old_name !== NULL && $old_name !== "") {
    $_SESSION["username"] = $old_name;
    print ("<p><b>Name:</b> $old_name\n");
}
else {
    print ("<p><b>Name:</b> You do not have a name set</p>\n");
}
?>
<br/><br/>
<a href=/cgi-bin/php-sessions-2.php>Session Page 2</a><br/>
<a href=/php-cgiform.html>PHP CGI Form</a><br />
<form style=margin-top:30px action=/cgi-bin/php-destroy-session.php method=get>
<button type=submit>Destroy Session</button>
</form>

</body>
</html>