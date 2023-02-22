// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, './uploads/file');
//     },
//     filename: function(req, file, cb) {
//       cb(null, Date.now() + file.originalname);
//     }
//   });
  
//   const upload = multer({ storage: storage });
  
//   router.post(
//     "/",
//     // [isNotAuth, authorization(["admin", "root", "supervisor"])],
//     upload.array("file", 50),
//     especialistaController.save
//   );
  
//   router.post("/", upload.array("file", 50), async (req, res) => {
//       const files = req.files;
//       if (!files) {
//         const error = new Error("Please choose files");
//         error.httpStatusCode = 400;
//         return next(error);
//       }
//       try {
//         // Create the directory if it doesn't exist
//         const directory = await Directory.findOrCreate({
//         where: { name: req.body.directory },
//       }); 
//        // Move the file to the directory
//        const file = await File.create({
//         name: req.file.originalname,
//         path: req.file.path,
//         size: req.file.size,
//         mimetype: req.file.mimetype,
//         path: path.join('./uploads/', req.body.directory, req.file.originalname),
//         directoryId: directory.id,
//       });
//       fs.renameSync(req.file.path, path.join('./uploads/', req.body.directory, req.file.originalname));
  
//       res.status(200).json({ message: 'File uploaded successfully' });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error uploading file' });
//     }
//   });
  
//   module.exports = router;