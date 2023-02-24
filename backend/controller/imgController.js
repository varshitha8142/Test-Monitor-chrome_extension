const Img = require("../models/ImgModel");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const getImages = async (req, res) => {
  Img.find({}, function (err, imgs) {
    if (err) res.send(err);
    res.json(imgs);
  });
};

const getImage = async (req, res) => {
  Img.findOne({}, "img createdAt", function (err, img) {
    if (err) res.send(err);
    res.contentType("json");
    res.send(img);
  }).sort({ createdAt: "desc" });
};
const uploadImage = async (req, res) => {
  var new_img = new Img();
  new_img.img.data = fs.readFileSync(req.file.path);
  new_img.img.contentType = "image/jpeg"; // or 'image/png'
  new_img.save();
  res.json({ message: "New image added to the db!" });
};

const deleteImage = async (req, res) => {
  const directory = path.join(process.cwd(), "uploads");
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
      });
    }
  });
  Img.deleteMany({}, function (err, img) {
    if (err) res.send(err);
    res.contentType("json");
    res.send(img);
  });
};

module.exports = { getImage, getImages, uploadImage, deleteImage };
