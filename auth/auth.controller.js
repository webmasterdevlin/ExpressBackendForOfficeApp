const authService = require("../auth/auth.service");

async function authUser(req, res) {
  try {
    const user = await authService.verifyUser(req.body);

    if (user) {
      const createdJwt = await authService.sign(req.body);
      res.json(createdJwt);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  authUser
};
