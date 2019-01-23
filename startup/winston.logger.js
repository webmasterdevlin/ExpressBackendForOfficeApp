const { transports, createLogger, format, exceptions } = require("winston");
// require('winston-mongodb'); // log into mongodb
require("express-async-errors");
require("winston-daily-rotate-file");
const fs = require("fs");

const env = process.env.NODE_ENV || "development";
const logDir = "log";

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `${logDir}/%DATE%-results.log`,
  datePattern: "YYYY-MM-DD"
});

const logger = createLogger({
  // change level if in dev environment versus production
  level: env === "development" ? "verbose" : "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.Console({
      level: "info",
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    }),
    dailyRotateFileTransport
  ]
});

// logger.debug("Debugging info");
// logger.verbose("Verbose info");
// logger.info("Hello world");
// logger.warn("Warning message");
// logger.error("Error info");

module.exports = logger;

// module.exports = function() {
//   exceptions.handle(
//     new transports.Console({ colorize: true, prettyPrint: true }),
//     new transports.File({ filename: "uncaughtExceptions.log" })
//   );

//   process.on("unhandledRejection", ex => {
//     throw ex;
//   });

//   winston.add(new transports.File({ filename: "logfile.log" }));
//   // winston.add(winston.transports.MongoDB, {
//   //   db: 'mongodb://localhost/mydb',
//   //   level: 'info'
//   // });
// };
