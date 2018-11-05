'use strict';

const os = require("os");
const tload = process.hrtime();

const hello = (event, context, callback) =>
{
    callback(null, {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            time: new Date().getTime(),
            cpu: os.cpus(),
            address: os.networkInterfaces(),
            time_procces: process.hrtime(tload),
            memory: os.totalmem(),
            free_memory: os.freemem(),
            platform: os.platform(),
            os_release: os.release(),
            os_type: os.type()
        })
    })
};


module.exports.hello128 = hello;
module.exports.hello256 = hello;
module.exports.hello512 = hello;
module.exports.hello1024 = hello;
module.exports.hello2048 = hello;
