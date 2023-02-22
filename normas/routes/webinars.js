var express = require("express");
var router = express.Router();
const { body, validationResult } = require("express-validator");
const webinarController = require("../controller/webinar/webinarController");
const multer = require("multer"),
  path = require("path");
const authorization = require("../server/middlewares/authotization");
const {isAuth, isNotAuth} = require("../server/middlewares/authentication");


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/webinar");
  },
  filename: function (req, file, cb) {
    const data = req.body.data.replace(/\s/g, "_");
    const {tema} = req.body
    // const originalName = file.originalname.replace(/\s/g, "_");
    const ext = path.extname(file.originalname);
    const finalName = `${tema}_${data}${ext}`;
    cb(null, finalName);
  }
});
const upload = multer({ storage: storage })
//Default for all routes
router.use(function(req, res, next){
  res.locals.sessionID = req.session.sessionID;
  next();
});

router.post(
  "/",
  [
    body("tema")
      .not()
      .isEmpty()
      .withMessage("Nome do tema é obrigatório"),
      
    body("resumo")
      .not()
      .isEmpty()
      .withMessage("Responsavel do sector em falta"),
  ],
  // [isNotAuth, authorization(['admin', 'root']),],
  upload.single("file_name"),
  webinarController.create
);

// All webinar
router.get(
  "/",
  // [isNotAuth],
  //  authorization(['admin', 'root']),
  webinarController.findAll
);

// Create
router.get("/create", 
//[isNotAuth, authorization(['admin', 'root']),], 
webinarController.creatView);

router.post(
  "/update/:id",
  [
    body("tema")
      .not()
      .isEmpty()
      .withMessage("Nome de sector é obrigatório"),

    body("resumo")
      .not()
      .isEmpty()
      .withMessage("Responsavel do sector em falta"),
  ],
  //[isNotAuth, authorization(['admin', 'root']),],
  webinarController.update
);

// Display Webinar
router.get("/:url/display", webinarController.viewWebinar);


router.get("/:url/privatePdf", 
// [isNotAuth], 
webinarController.CallWEBINAR);

router.post("/:id", upload.single("file_name"), webinarController.update)
// Show
// router.get(
//   "/show/:id",
//  // [isNotAuth, authorization(["admin", "root"])],
//   webinarController.showwebinarView
// );

// module.exports = sequelize_instance;
module.exports = router;
