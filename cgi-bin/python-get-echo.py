#!/usr/bin/env python3
import os
import urllib.parse

print ("Cache-Control: no-cache")
print ("Content-type: text/html\n")
print ("<html>")
print ("<head>")
print ("<title>GET Request Echo</title>")
print ("</head>")
print ("<body>")
print ("<h1 align=center>Get Request Echo</h1>")
print ("<hr/>")

query_str = os.environ["QUERY_STRING"]
parsed_str = urllib.parse.parse_qs(query_str)
print ("<b>Query String: </b>", query_str, "<br />")

print ("<b>Parsed String</b></br>")
print ("<ul>")
# print out each variable & content in query
for param in parsed_str:
    print ("<li>", param, " : ", parsed_str[param], "</li>")

print ("</ul></body></html>")
