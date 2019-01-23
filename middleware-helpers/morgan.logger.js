const logger = require("morgan");

module.exports = app => {
  if (env.NODE_ENV === "development") {
    app.use(logger("dev"));
  }
};
