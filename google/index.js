'use strict';
const os = require("os")

const hello = (request, response) =>
{
  let cpu_start = process.cpuUsage();
  let time_init = new Date().getTime();
  response.status(200).send({
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
  });
};

exports.event = (event, callback) =>
{
  callback();
};

module.exports.hello128 = hello;
module.exports.hello256 = hello;
module.exports.hello512 = hello;
module.exports.hello1024 = hello;
module.exports.hello2048 = hello;
