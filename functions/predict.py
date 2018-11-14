try:
    import unzip_requirements
except ImportError:
    pass
import numpy as np
from mxnet.gluon.model_zoo import vision
from mxnet import gluon, nd
import mxnet as mx
import matplotlib.pyplot as plt
import json

ctx = mx.cpu()
densenet121 = vision.densenet121(pretrained=True, ctx=ctx)


def transform(image):
    resized = mx.image.resize_short(image, 224)  # minimum 224x224 images
    cropped, crop_info = mx.image.center_crop(resized, (224, 224))
    normalized = mx.image.color_normalize(cropped.astype(np.float32)/255,
                                          mean=mx.nd.array(
                                              [0.485, 0.456, 0.406]),
                                          std=mx.nd.array([0.229, 0.224, 0.225]))
    # the network expect batches of the form (N,3,224,224)
    # Transposing from (224, 224, 3) to (3, 224, 224)
    transposed = normalized.transpose((2, 0, 1))
    # change the shape from (3, 224, 224) to (1, 3, 224, 224)
    batchified = transposed.expand_dims(axis=0)
    return batchified


def pp():
    mx.test_utils.download(
        'https://raw.githubusercontent.com/dmlc/web-data/master/mxnet/doc/tutorials/onnx/image_net_labels.json')
    categories = np.array(json.load(open('image_net_labels.json', 'r')))

    filename = "qdog.jpg"
    image = mx.image.imread(filename)
    plt.imshow(image.asnumpy())
    predictions = densenet121(transform(image)).softmax()
    top_pred = predictions.topk(k=3)[0].asnumpy()
    response = []
    for index in top_pred:
        probability = predictions[0][int(index)]
        category = categories[int(index)]
        response.append(
            {"category": category, "probability": probability.asscalar() * 100})
    return response
