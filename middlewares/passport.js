const User = require("../models/User");
const bcrypt = require("bcryptjs");

const LocalStrategy = require("passport-local").Strategy;

const localStrategy = new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password",
  },
  async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done({ message: "username or password is wrong!" });
      }
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass == false) {
        return done({ message: "username or password is wrong!" });
      }
      return done(null, user);
    } catch (error) {
      done(error);
    }
  }
);
module.exports = localStrategy;
