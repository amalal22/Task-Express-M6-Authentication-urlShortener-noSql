const express = require("express");

const router = express.Router();

const { signup, signin, getUsers, register } = require("./users.controllers");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users", getUsers);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
