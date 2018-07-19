var winston = require('winston');
const {transports, createLogger, format} = require('winston');
require('winston-daily-rotate-file');


var transport = new (winston.transports.DailyRotateFile)({
    filename: './log/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  });

  transport.on('rotate', function(oldFilename, newFilename) {
  });

const logger = winston.createLogger({
  format: format.combine(
          format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
          format.json() ),

  transports: [
    transport
  ]
});


module.exports = logger;


//https://github.com/winstonjs/winston/blob/master/examples/custom-timestamp.js
//https://github.com/winstonjs/winston-daily-rotate-file

// following work fine but replaced by transport
//new winston.transports.File({
//  filename: './log/combined.log',
//}),
//new winston.transports.File({
//  filename: './log/errors.log',
//  level: 'error'
//})
