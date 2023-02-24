const express = require("express");
const {
  getUser,
  createUser,

  deleteUser,
} = require("../controller/userController");
const router = express.Router();
// get specific request
router.get("/", getUser);

// post request
router.post("/", createUser);

// delete request
router.delete("/", deleteUser);

module.exports = router;
