const express = require("express");
var mongoose = require("mongoose");
const fs = require("fs");
require("dotenv/config");
const userRoutes = require("./routes/userRoutes");
const imgRoutes = require("./routes/imgRoutes");
const cors = require("cors");
const Img = require("./models/ImgModel");

var multer = require("multer");
var app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
mongoose.set("strictQuery", false);
const mongoURI = process.env.MongoDb_URL;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads/");
  },
});

const upload = multer({ storage: storage });
app.use("/user", userRoutes);
app.use("/image", imgRoutes);

// app
//   .route("/img_data")
//   .post(upload.single("file"), function (req, res) {
//     var new_img = new Img();
//     new_img.img.data = fs.readFileSync(req.file.path);
//     new_img.img.contentType = "image/jpeg"; // or 'image/png'
//     new_img.save();
//     res.json({ message: "New image added to the db!" });
//   })
//   .get(function (req, res) {
//     Img.findOne({}, "img createdAt", function (err, img) {
//       if (err) res.send(err);
//       res.contentType("json");
//       res.send(img);
//     }).sort({ createdAt: "desc" });
//   })
//   .delete(function (req, res) {
//     Img.deleteMany({}, function (err, img) {
//       if (err) res.send(err);
//       res.contentType("json");
//       res.send(img);
//     });
//   });
var port = process.env.PORT || "3000";
app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server listening on port", port);
});
