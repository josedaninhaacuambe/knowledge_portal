var express = require("express");
var router = express.Router();
const { body } = require("express-validator");
const TrainingController = require("../controller/training/trainingController");
const multer = require("multer"),
  path = require("path");
const { isNotAuth } = require("../server/middlewares/authentication");
const authorization = require("../server/middlewares/authotization");

//Default for all routes
// router.use(function (req, res, next) {
//   res.locals.sessionID = req.session.sessionID;
//   next();
// });

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/training");
  },
  filename: function (req, file, cb) {
    const published = req.body.published.replace(/\s/g, "_");
    const {nome} = req.body
    // const originalName = file.originalname.replace(/\s/g, "_");
    const ext = path.extname(file.originalname);
    const finalName = `${nome}_${published}${ext}`;
    cb(null, finalName);
  }
});

const upload = multer({ storage: storage })

// Save documents
router.post(
  "/",
  [
    body("nome").not().isEmpty().withMessage("Nome da norma é obrigatório"),
    //body("code").not().isEmpty().withMessage("O codigo da norma é obrigatório"),

    body("published")
      .isLength({ min: 3 })
      .withMessage("A data de publicacao é obrigatório"),

    body("email")
      .not()
      .isEmpty()
      .withMessage("A descrição não pode ser nula"),
  ],
  // [isNotAuth, nomeization(["admin", "root", "supervisor"])],
  upload.single("file_name"),
  TrainingController.save
);

// Display PDF
router.get("/:published/display", TrainingController.viewPDF7);


router.get("/:published/privatePdf", 
// [isNotAuth], 
TrainingController.callPDF7);


// All documents
router.get("/", 
// [isNotAuth], 
TrainingController.findAll);

//Return the view for creation
router.get("/create", [isNotAuth], TrainingController.registerView)

//Update router view
router.get("/edit/:id", [isNotAuth], TrainingController.updateView)

//Update router
router.post("/:id", upload.single("file_name"), [isNotAuth], TrainingController.update)

module.exports = router;
