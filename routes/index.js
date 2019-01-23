routes = ["./user.router", "./department.router", "../auth/auth.router"].map(
  elem => require(elem)
);

module.exports = function(app) {
  app.use("/api", routes);
};
