'use strict';
const os = require("os");
const fft = require("./functions/fft")

const hello = (event, context, callback) =>
{
    let cpu_start = process.cpuUsage();
    let time_init = new Date().getTime();
    callback(null, {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            platform: {
                cpu: {
                    descriptions: os.cpus(),
                    usage: {
                        start: cpu_start,
                        end: process.cpuUsage(cpu_start)
                    }
                },
                memory: {
                    total: os.totalmem(),
                    usage: process.memoryUsage,
                    free: os.freemem()
                },
                os: {
                    type: os.type(),
                    release: os.release()
                },
                address: os.networkInterfaces(),
            },
            time: {
                init: time_init,
                end: new Date().getTime()
            }
        })
    })
};
module.exports.hello128 = hello;
module.exports.hello256 = hello;
module.exports.hello512 = hello;
module.exports.hello1024 = hello;
module.exports.hello2048 = hello;

const fftFunc = (event, context, callback) =>
{
    let cpu_start = process.cpuUsage();
    let time_init = new Date().getTime();
    const result = fft.fft(1048576);
    callback(null, {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            platform: {
                cpu: {
                    descriptions: os.cpus(),
                    usage: {
                        start: cpu_start,
                        end: process.cpuUsage(cpu_start)
                    }
                },
                memory: {
                    total: os.totalmem(),
                    usage: process.memoryUsage,
                    free: os.freemem()
                },
                os: {
                    type: os.type(),
                    release: os.release()
                },
                address: os.networkInterfaces(),
            },
            time: {
                init: time_init,
                end: new Date().getTime()
            },
            operation: result
        })
    });
};
module.exports.fft128 = fftFunc;
module.exports.fft256 = fftFunc;
module.exports.fft512 = fftFunc;
module.exports.fft1024 = fftFunc;
module.exports.fft2048 = fftFunc;