var express = require("express");
var router = express.Router();
const { body } = require("express-validator");
const processoController = require("../controller/processo/processoController");
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
    cb(null, "./uploads/processos");
  },
  filename: function (req, file, cb) {
    const name1 = req.body.name.replace(/\s/g, "_");
    const {name} = req.body
    // const originalName = file.originalname.replace(/\s/g, "_");
    const ext = path.extname(file.originalname);
    const finalName = `${name}_${name1}${ext}`;
    cb(null, finalName);
  }
});

const upload = multer({ storage: storage })

// Save documents
router.post(
  "/",
  [
    body("name").not().isEmpty().withMessage("Nome da norma é obrigatório"),
    //body("description").not().isEmpty().withMessage("O codigo da norma é obrigatório"),

    body("type")
      .isLength({ min: 3 })
      .withMessage("A data de publicacao é obrigatório"),

    body("description")
      .not()
      .isEmpty()
      .withMessage("A descrição não pode ser nula"),
  ],
  // [isNotAuth, authorization(["admin", "root", "supervisor"])],
  upload.single("file_name"),
  processoController.save
);

// Display PDF
router.get("/:name/display", processoController.viewPDF2);


router.get("/:name/privatePdf", 
// [isNotAuth], 
processoController.callPDF2);


// All documents
router.get("/", 
// [isNotAuth], 
processoController.findAll);

//Return the view for creation
router.get("/create", [isNotAuth], processoController.registerView)

//Update router view
router.get("/edit/:id", [isNotAuth], processoController.updateView)

//Update router
router.post("/:id", upload.single("file_name"), [isNotAuth], processoController.update)

module.exports = router;
