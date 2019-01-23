const expressJwt = require("express-jwt");
const userService = require("../services/user.service");

async function isRevoked(req, payload, done) {
  try {
    const user = await userService.getById(payload.sub);
    // revoke token if user no longer exists
    if (!user) {
      return done(null, true);
    }
    done();
  } catch (e) {
    throw e.message;
  }
}

function checkJwt() {
  const secret = process.env.SECRET;
  return expressJwt({ secret, isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      "/api/auth/login",
      "/api/register"
    ]
  });
}

module.exports = function(app) {
  app.use(checkJwt());
};
