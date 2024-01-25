const User = require("../../models/User");
const bycrptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const hashPass = async (password) => {
  const hashedPass = await bycrptjs.hash(password, 10);
  return hashedPass;
};
const generateToken = (user) => {
  const payload = {
    _id: user._id,
    username: user.usernamme,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "5h",
  });
  return token;
};
exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

exports.signin = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("urls");
    res.status(201).json(users);
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  try {
    const password = req.body.password;
    const hashPassword = await hashPass(password);
    req.body.password = hashPassword;
    const user = await User.create(req.body);

    return res.status(201).json({ token: token });
  } catch (error) {
    next(error);
  }
};
exports.login = async (req, res, next) => {
  try {
    const token = generateToken(req.user);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
