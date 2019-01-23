const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// GET: /api/users
router.get("/users", userController.retrieveUsers);

// GET: /api/users/{id}
router.get("/users/:id", userController.retrieveOneUser);

// POST: /api/users
router.post("/register", userController.saveUser);

// DELETE: /api/users/{id}
router.delete("/users/:id", userController.removeUser);

// PUT: /api/users/{id}
router.put("/users/:id", userController.updateUser);

module.exports = router;
