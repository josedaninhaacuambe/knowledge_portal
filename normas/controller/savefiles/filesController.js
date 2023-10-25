require("dotenv").config();
const { File, Directory } = require("../../models/files");
const multer = require('multer');
const fs = require("fs");
const { basicFormat } = require("../../public/javascripts/utils");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });


exports.uploadFile = async (req, res) => {
  try {
    const { name, path, size, mimetype, directory } = req.body;
    const file = await File.create({ name, path, size, mimetype, directory });
    return res.status(201).json({ file });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.save = async (req, res, next) => {
  const file = req.file;
  const directory = req.body.directory;

  // move the file to the desired directory
  // file.mv(`${directory}/${file.name}`, function(err) {
  //   if (err) {
  //     return res.status(500).send(err);
  //   }
    try {
      // Create the directory if it doesn't exist
      const directory = await Directory.findOrCreate({
      where: { name: req.body.directory },
    }); 
      // Move the file to the directory
      //const { name, sender: sender, message, status, DateTime, description, data, type, sector_id } = req.body;
      //const file_name = req.file.path;
      const file = await File.create({
      name: req.file.originalname,
      path: req.file.path,
      size: req.file.size,
      mimetype: req.file.mimetype,
      path: path.join('./uploads/', req.body.directory, req.file.originalname),
      directoryId: directory.id,
    });
    fs.renameSync(req.file.path, path.join('./uploads/', req.body.directory, req.file.originalname));

    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error uploading file' });
  }
};
