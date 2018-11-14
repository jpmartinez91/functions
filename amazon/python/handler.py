

import json
# import predict
import sys
import os
try:
    sys.path.append(os.path.abspath(
        os.path.dirname(__file__) + '/functions'))
    import predict
except ImportError:
    sys.exit()


def mxnet(event, context):
    body = {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "input": event
    }

    # print(data)
    response = {
        "statusCode": 200,
        "body": json.dumps(predict.pp())
    }

    return response


# Use this code if you don't use the http event with the LAMBDA-PROXY
# integration
"""
    return {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "event": event
    }
    """
