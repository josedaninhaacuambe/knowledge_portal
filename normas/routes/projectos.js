var express = require("express");
var router = express.Router();
const { body } = require("express-validator");
const projectoController = require("../controller/projecto/projectoController");
const multer = require("multer"),
  path = require("path");
const { isNotAuth } = require("../server/middlewares/authentication");
const authorization = require("../server/middlewares/authotization");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/projectos");
  },
  filename: function (req, file, cb) {
    const inicio = req.body.inicio.replace(/\s/g, "_");
    const {name} = req.body
    const ext = path.extname(file.originalname);
    const finalName = `${name}_${inicio}${ext}`;
    cb(null, finalName);
  }
});

const upload = multer({ storage: storage })

// Save documents
router.post(
  "/",
  [
    body("name").not().isEmpty().withMessage("Nome da norma é obrigatório"),
    body("data").not().isEmpty().withMessage("O codigo da norma é obrigatório"),

    body("published")
      .isLength({ min: 3 })
      .withMessage("A data de publicacao é obrigatório"),

    body("description")
      .not()
      .isEmpty()
      .withMessage("A descrição não pode ser nula"),
  ],
  // [isNotAuth, authorization(["admin", "root", "supervisor"])],
  upload.single("file_name"),
  projectoController.save
);

// Display PDF
router.get("/:inicio/display", projectoController.viewPDF4);

router.get("/:inicio/privatePdf",
// [isNotAuth], 
projectoController.callPDF4);

// All documents
router.get("/", 
// [isNotAuth], 
projectoController.findAll);

//Return the view for creation
router.get("/create", [isNotAuth], projectoController.registerView)

//Update router view
router.get("/edit/:id", [isNotAuth], projectoController.updateView)

//Update router
router.post("/:id", upload.single("file_name"), [isNotAuth], projectoController.update)

module.exports = router;
