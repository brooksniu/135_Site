#!/usr/bin/env python3
import os
from http.cookies import SimpleCookie

name = ""
SSID = ""

if (os.getenv("HTTP_COOKIE") != None):
    # get current cookies, create a dictionary and store it
    cookie = SimpleCookie()
    cookie.load(os.getenv("HTTP_COOKIE"))
    for key, morsel in cookie.items():
        # if request sent with cookie, save info
        if (key[0:4] == "PYID"):
            SSID = key
            if (name == ""):
                name = morsel.value

# Headers
print("Cache-Control: no-cache")
print("Set-Cookie: %s=destroyed" % SSID)
print("Content-type: text/html\n")

# Body - HTML
print("<html>")
print("<head><title>C Session Destroyed</title></head>")
print("<body>")
print("<h1>C Session Destroyed</h1>")

# Links
print("<a href=\"/cgi-bin/python-sessions-1.py\">Back to Page 1</a>")
print("<br />")
print("<a href=\"/cgi-bin/python-sessions-2.py\">Back to Page 2</a>")
print("<br />")
print("<a href=\"/python-cgiform.html\">C CGI Form</a>")

print("</body>")
print("</html>")