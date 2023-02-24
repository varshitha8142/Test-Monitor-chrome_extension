const express = require("express");

const {
  getImages,
  uploadImage,
  deleteImage,
} = require("../controller/imgController");
const router = express.Router();
var multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads/");
  },
});

const upload = multer({ storage: storage });
// get specific request
router.get("/", getImages);

// post request
router.post("/", upload.single("file"), uploadImage);

// delete request
router.delete("/", deleteImage);

module.exports = router;
