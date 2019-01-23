const userService = require("../services/user.service");

// This is promise implementation
function retrieveUsers(req, res, next) {
  userService
    .getAllFromDb()
    .then(users => res.json(users))
    .catch(err => next(err));
}
// promise
function retrieveOneUser(req, res, next) {
  userService
    .getById(req.params.id)
    .then(user => res.json(user))
    .catch(err => next(err));
}

// This is async/await implementation. A syntactic sugar on top of promise
async function saveUser(req, res) {
  try {
    const createdUser = await userService.add(req.body);
    res.json({ created: createdUser.username });
  } catch (error) {
    res.status(500).json(error);
  }
}

// async/await
async function updateUser(req, res) {
  try {
    await userService.update(req.params.id, req.body);
    res.json({ updated: req.params.id });
  } catch (error) {
    res.status(500).json(error);
  }
}

// async/await
async function removeUser(req, res) {
  try {
    console.log("Controller", req.params.id);
    await userService.remove(req.params.id);
    res.json({ deleted: req.params.id });
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  retrieveUsers,
  retrieveOneUser,
  saveUser,
  updateUser,
  removeUser
};
