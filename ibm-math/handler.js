'use strict';
const os = require("os")
const fft = require("./functions/fft")

const hello = (params) =>
{
  let cpu_start = process.cpuUsage();
  let time_init = new Date().getTime();
  return {
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
  }
}

module.exports.hello128 = hello;
module.exports.hello256 = hello;
module.exports.hello512 = hello;


const fftFunc = (params) =>
{
  let cpu_start = process.cpuUsage();
  let time_init = new Date().getTime();
  const result = fft.fft(param);
  return {
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
  }
};
module.exports.fft128 = fftFunc;
module.exports.fft256 = fftFunc;
module.exports.fft512 = fftFunc;