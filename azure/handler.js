'use strict';

const os = require("os")
const fft = require("./functions/fft")

const hello = (context, req) =>
{
  let cpu_start = process.cpuUsage();
  let time_init = new Date().getTime();
  context.res = {
    status: 200, /* Defaults to 200 */
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
  };
  context.done();
};

module.exports.hello128 = hello;
module.exports.hello256 = hello;
module.exports.hello512 = hello;
module.exports.hello1024 = hello;
module.exports.hello2048 = hello;



const fftFunc = (context, req) =>
{
  let cpu_start = process.cpuUsage();
  let time_init = new Date().getTime();
  const result = fft.fft(1048576);
  context.res = {
    status: 200, /* Defaults to 200 */
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
  }
  context.done();
};
module.exports.fft128 = fftFunc;
module.exports.fft256 = fftFunc;
module.exports.fft512 = fftFunc;
module.exports.fft1024 = fftFunc;
module.exports.fft2048 = fftFunc;