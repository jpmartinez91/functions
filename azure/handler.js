'use strict';

const os = require("os")
const tload = process.hrtime();

const hello = (context, req) =>
{
  context.res = {
    status: 200, /* Defaults to 200 */
    body: JSON.stringify({
      time: new Date().getTime(),
      cpu: os.cpus(),
      address: os.networkInterfaces(),
      time_procces: process.hrtime(tload),
      memory: os.totalmem()
    })
  };
  context.done();
};

module.exports.hello128 = hello;
module.exports.hello256 = hello;
module.exports.hello512 = hello;
module.exports.hello1024 = hello;
module.exports.hello2048 = hello;