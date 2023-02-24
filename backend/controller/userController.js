const User = require("../models/userModel");
const mongoose = require("mongoose");

const getUser = async (req, res) => {
  const user = await User.findOne({});
  if (!user) {
    return res.status(404).json({ message: "no such user found" });
  }
  res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { name, email, invitecode } = req.body;

  const emptyfiels = [];
  if (!name) {
    emptyfiels.push("name");
  }
  if (!email) {
    emptyfiels.push("email");
  }
  if (!invitecode) {
    emptyfiels.push("invitecode");
  }

  if (emptyfiels.length > 0) {
    return res
      .status(400)
      .json({ message: "Please fill all the fields", fields: emptyfiels });
  }

  try {
    const user = new User({ name, email, invitecode });
    user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const user = await User.deleteMany({});
  if (!user) {
    return res.status(404).json({ message: "no such user found" });
  }
  res.status(200).json(user);
};

module.exports = { getUser, createUser, deleteUser };
