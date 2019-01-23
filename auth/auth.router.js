const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");

// POST: /api/login
router.post("/auth/login", authController.authUser);

module.exports = router;
