const express = require("express");

const router = express.Router();

const {
  signup,
  signin,
  getUsers,
  register,
  login,
} = require("./users.controllers");
const passport = require("passport");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users", getUsers);
router.post("/register", register);
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);

module.exports = router;
