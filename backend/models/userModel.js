const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "User should have a name"],
  },
  email: {
    type: String,
    required: [true, "User should have a email"],
  },
  invitecode: {
    type: String,
    required: [true, "User should have a text invitation code"],
  },
});

module.exports = mongoose.model("User", userSchema);
