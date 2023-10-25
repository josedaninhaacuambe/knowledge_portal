var express = require("express");
var router = express.Router();
const { body } = require("express-validator");
const chatController = require("../controller/chat/chatController");
const multer = require("multer"),
  path = require("path");
const { isNotAuth } = require("../server/middlewares/authentication");
const authorization = require("../server/middlewares/authotization");


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/chat");
  },
  filename: function (req, file, cb) {
    const message = req.body.message.replace(/\s/g, "_");
    const {roomId} = req.body
    // const originalName = file.originalname.replace(/\s/g, "_");
    const ext = path.extname(file.originalname);
    const finalName = `${roomId}_${message}${ext}`;
    cb(null, finalName);
  }
});

const upload = multer({ storage: storage })

// Save documents
router.post(
  "/",
  [
    body("message").not().isEmpty().withMessage("Nome da norma é obrigatório"),
    //body("code").not().isEmpty().withMessage("O codigo da norma é obrigatório"),

    body("roomId")
      .isLength({ min: 3 })
      .withMessage("A data de publicacao é obrigatório"),

    body("description")
      .not()
      .isEmpty()
      .withMessage("A descrição não pode ser nula"),
  ],
  // [isNotAuth, authorization(["admin", "root", "supervisor"])],
  upload.single("file_name"),
  chatController.save
);

// Display PDF
router.get("/:message/display", chatController.viewPDF7);


router.get("/:message/privatePdf", 
// [isNotAuth], 
chatController.callPDF7);


// All documents
router.get("/", 
// [isNotAuth], 
chatController.findAll);

//Return the view for creation
router.get("/create", [isNotAuth], chatController.registerView)

//Update router view
router.get("/edit/:id", [isNotAuth], chatController.updateView)

//Update router
router.post("/:id", upload.single("file_name"), [isNotAuth], chatController.update)

module.exports = router;
