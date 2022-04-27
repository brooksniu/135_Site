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


print ("Cache-Control: no-cache")

# check if name is empty
if (not(name == "" or name == None)):
    print("Content-type: text/html")
    print("Set-Cookie: ", SSID, "=", name, "\n")
else:
    print("Content-type: text/html\n")

#  Body - HTML
print("<html>")
print("<head><title>Python Sessions</title></head>")
print("<body>")
print("<h1>Python Sessions Page 2</h1>")
print("<table>")

if (not(name == "" or name == "destroyed")):
    print("<tr><td>Cookie:</td><td>%s=%s</td></tr>" % (SSID, name))
else :
    print("<tr><td>Cookie:</td><td>None</td></tr>")

print("</table>")
# Links for other pages
print("<br />")
print("<a href=\"/cgi-bin/python-sessions-1.py\">Session Page 1</a>")
print("<br />")
print("<a href=\"/python-cgiform.html\">Python CGI Form</a>")
print("<br /><br />")

# Destroy Cookie button
print("<form action=\"/cgi-bin/python-destroy-session.py\" method=\"get\">")
print("<button type=\"submit\">Destroy Session</button>")
print("</form>")

print("</body>")
print("</html>")