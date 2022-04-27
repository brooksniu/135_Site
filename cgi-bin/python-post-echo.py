#!/usr/bin/env python3
import sys

data = sys.stdin.read()

print ("Cache-Control: no-cache")
print ("Content-type: text/html\n")
print ("<html>")
print ("<head>")
print ("<title>POST Request Echo</title>")
print ("</head>")
print ("<body>")
print ("<h1 align=center>POST Request Echo</h1>")
print ("<hr/>")

print ("<b>Message Body: </b><br />")
print ("<b>",data, "<b><br />")

print ("</body></html>")