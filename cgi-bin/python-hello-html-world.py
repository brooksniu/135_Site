#!/usr/bin/python

from datetime import datetime
import os

now = datetime.now()

print ("Cache-Control: no-cache\n")
print ("Content-type: text/html\n\n")
print ("<html>")
print ("<head>")
print ("<title>Hello, Perl!</title>")
print ("</head>")
print ("<body>")

print ("<h1>Brooks here - Hello, Python!</h1>")
print ("<p>This page was generated with the Perl programming langauge</p>")

print ("<p>Current Time: ", now.strftime("%d/%m/%Y %H:%M:%S") , "</p>")

# IP Address is an environment variable when using CGI
address = os.getenv("REMOTE_ADDR")
print ("<p>Your IP Address: ", address, "</p>")

print ("</body>")
print ("</html>")
