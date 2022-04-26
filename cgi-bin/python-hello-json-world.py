#!/usr/bin/env python3
# In Perl, you must first install the JSON package from CPAN (the Perl equivalent to npm)
import json
from datetime import datetime
import os

print ("Cache-Control: no-cache")
print ("Content-type: application/json\n")

now = datetime.now()
time = now.strftime("%d/%m/%Y %H:%M:%S")
address = os.getenv("REMOTE_ADDR")

message = {
    "title" : "Hello, Python!",
    "heading" : "Hello, Python!",
    "message" : "This page was generated with the Python programming language",
    "time" : time, 
    "IP" : address
    }

my_json = json.dumps(message)
print (my_json)
