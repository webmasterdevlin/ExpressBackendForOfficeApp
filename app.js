const express = require("express");
const app = new express();

require("./startup/config"); // configuration
require("./startup/database"); // resource database
require("./middleware-helpers/globalErrorHandler")(app); // global error handler
require("./startup/body-parser")(app); // parse incoming request bodies
require("./startup/cors")(app); // allow cross-origin requests
require("./middleware-helpers/morgan.logger")(app); // morgan logger - http
require("./startup/winston.logger"); // winston logger - any
require("./middleware-helpers/jwtChecker")(app); // use JWT auth to secure the api
require("./routes/")(app); // use all the routes
// require("./startup/prod")(app); // for production

module.exports = app;
