import json
import sys
import os
try:
    sys.path.append(os.path.abspath(
        os.path.dirname(__file__) + '/functions'))
    import predict
except ImportError:
    sys.exit()


def hello(params):
    name = params.get("name", "stranger")
    greeting = "Hello " + name + "!"
    print(predict.pp())
    return {"greeting": greeting}
