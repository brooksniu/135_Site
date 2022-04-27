<?php 
header("Cache-Control: no-cache");
header("Content-type: text/html")
?>
<html>
<head>
<title>Hello, PHP!</title>
</head>
<body>
<h1>Brooks here - Hello, PHP!</h1>
<p>This page was generated with the PHP programming langauge</p>
<p>Current Time: <?php echo date("Y-m-d h:i:sa") ?></p>
<p>Your IP Address:  <?php echo $_SERVER["REMOTE_ADDR"] ?> </p>
</body>
</html>