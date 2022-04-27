#!/usr/bin/env python3
import os
import sys

data = sys.stdin.read()

print ("Cache-Control: no-cache")
print ("Content-type: text/html\n")
print ("<html>")
print ("<head>")
print ("<title>GET Request Echo</title>")
print ("</head>")
print ("<body>")
print ("<h1 align=center>Get Request Echo</h1>")
print ("<hr/>")

protocol = os.environ["SERVER_PROTOCOL"]
method = os.environ["REQUEST_METHOD"]
print ("<p><b>HTTP Protocol:</b>", protocol, "</p>")
print ("<p><b>HTTP Method:</b>", method, "</p>")

query_str = os.environ["QUERY_STRING"]
print ("<b>Query String: </b>", query_str, "<br />")

print ("<b>Message Body: </b><br />")
print ("<b>",data, "<b><br />")

print ("</ul></body></html>")
