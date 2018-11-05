'use strict';
// const exec = require('child_process').exec;
// const execSync = require('child_process').execSync;
const os = require("os");
const tload = process.hrtime();

const hello = (event, context, callback) =>
{
    // const macAddr = execSync('/sbin/ip link | grep "link-netnsid 0" | cut -f 6 -d " " | tr -d "[:space:]"').toString()
    // const cpuModel = execSync('grep "model name" /proc/cpuinfo | head -n 1 | cut -f 2 -d : | xargs').toString()
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
            memory: os.totalmem()
        })
    })
};


module.exports.hello128 = hello;
module.exports.hello256 = hello;
module.exports.hello512 = hello;
module.exports.hello1024 = hello;
module.exports.hello2048 = hello;
