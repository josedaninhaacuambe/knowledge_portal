require("dotenv").config();

const Books = require("../../models/books");
const fs = require("fs");
const { basicFormat } = require("../../public/javascripts/utils");
//const book = require("../../models/book");

exports.findAll = async (req, res) => {
  const book = await Books.findAll({
    attributes: [
      "id",
      "author",
      "file_name",
      "subject",
      "category",
      "published",
      "sector_id",
      "description"
    ],
  });
  return res.json({ body: book, status: 200 });
  //return res.json(book);
};

//! Missing validation
exports.save = async (req, res, next) => {
  try {
    const {       
    id, author, subject, category, published, description, sector_id } = req.body;
    const file_name = req.file.path;
    const savedbook = new Books({
      author: author,
      subject: subject,
      category: category,
      published: published,
      description: description,
      file_name: file_name,
      sector_id: sector_id,
    }).save();
    // const pro = await savedProcesso.save();
     return res.json({
        Books:  savedbook,
     title: "Novo book adicionado",
   });
    // const Books = await savedbook.save();
    // return res.json({ body: Books, status: 200 });
  } catch (error) {
    if (req.file.path && fs.existsSync(req.file.path)) {
      fs.unlink(req.file.path, (err) => {
        if (err) {
          return res.json({ body: err, status: 500 });
        }
        //!file removed
      });
    }
    return res.json({ body: error.stack, status: 500 });
  }
};

//Delete a Document with the specified id
exports.delete = (req, res) => {
  const id = req.params.id;
  Document.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        req.flash("remove", "Norma removida com sucesso");
        res.redirect("back");
      } else {
        res.json({
          message: `Cannot delete Document with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: "Could not delete Document with id=" + id,
      });
    });
};

//Find a single documents with an in
exports.findOne = (req, res) => {
  const id = req.params.id;
  Document.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Document with id=${id}`,
        });
      }
    })

    .catch(() => {
      res.status(500).send({
        message: "Error retrieving Document with id=" + id,
      });
    });
};

/* Update a Document identified by the id in the request */
exports.update = async (req, res) => {
  const id = req.params.id;
  const document = await Document.findByPk(id);
  const oldFileName = document.file_name;

  if (!document) {
    res.status(404).render("error.pug", {
      error: {
        status: 404,
        stack: "Documento não consta no sistema",
        url: req.headers.referer,
      },
      message: "Documento não consta no sistema",
    });
  }

  const newDocumetBody = {
    file_name: req.file.path,
    updated_at: Date.now(),
    ...req.body,
  };

  // return res.json({ data: document });

  try {
    const result = await Document.update(newDocumetBody, {
      where: { id: id },
    });
    if (result == 1) {
      if (fs.existsSync(oldFileName) && req.file.path) {
        fs.unlink(oldFileName, (err) => {
          if (err) {
            // req.flash(
            //   "error",
            //   "Norma foi actualizada, mas occoreu um erro ao substituir o ficheiro"
            // );
            return res.json({
              message:
                "Norma foi actualizada, mas occoreu um erro ao substituir o ficheiro",
              status: 500,
            });
          }
          //file removed
        });
      }

      req.flash("info", "Norma actualizada com sucesso");
      res.redirect("back");
    }
  } catch (err) {
    return res.status(409).render("error.pug", {
      error: {
        status: 409,
        stack: "Problemas ao efectuar a actualização do documento",
        url: req.headers.referer,
      },
      message: "Por favor tente de novo ou contacte o adminstrador " + err,
    });
  }
};

exports.callPDF7 = function (req, res, next) {
  // return res.json({'hi': 'Man'})
  return res.redirect(
    `http://localhost:3001?q=${req.params.published}&name=${req.query.author}&type=${req.query.file_name}`
  );
};

// PDF View
exports.viewPDF7 = async (req, res) => {
  const book = await Books.findOne({
    where: {
      data: req.params.published,
    },
  });
  if (book) {
    const path = book.file_name;

    if (fs.existsSync(path)) {
      res.contentType("application/pdf");
      res.setHeader(
        "Content-Type",
        "application/pdf",
        "Content-Disposition",
        `inline;filename=${book.author}`
      );
      return fs.createReadStream(path).pipe(res);
    } else {
      return res.json({
        error: {
          status: 404,
          stack: "Ficheiro não encontrado",
          url: req.headers.referer,
        },
        message: "Ficheiro não encontrado",
      });
    }
  } else {
    return res.json({
      error: {
        status: 404,
        stack: "Ficheiro não encontrado",
        url: req.headers.referer,
      },
      message: "Ficheiro não encontrado",
    });
  }
};

exports.registerView = async (req, res) => {
  if (
    req.session.sessionID.role == "admin" ||
    req.session.sessionID.role == "root" ||
    (req.session.sessionID.sector &&
      req.session.sessionID.sector.is_managed == 1)
  ) {
    // return res.json(req.session.sessionID)

    res.render("documents/create", { title: "Registar norma" });
  } else {
    // return res.json(req.session.sessionID)
    res.status(403).render("error.pug", {
      error: {
        status: 403,
        stack: "Transação não permitida para este usuário",
        url: req.headers.referer,
      },
      message: "Acesso proibido",
    });
    return;
  }
};

exports.updateView = async (req, res) => {
  if (
    req.session.sessionID.role == "admin" ||
    req.session.sessionID.role == "root" ||
    (req.session.sessionID.sector &&
      req.session.sessionID.sector.is_managed == 1)
  ) {
    const id = req.params.id;
    Document.findByPk(id)
      .then((data) => {
        if (data) {
          res.render("documents/edit", {
            title: "Actualização da norma",
            norma: data,
          });
        } else {
          res.status(404).render("error.pug", {
            error: {
              status: 404,
              stack: "Documento não encontrado",
              url: req.headers.referer,
            },
            message: "Informação não encontrada",
          });
        }
      })
      .catch(() => {
        res.status(500).render("error.pug", {
          error: {
            status: 500,
            stack: "Erro de servidor. Um erro inesperado aconteceu",
            url: req.headers.referer,
          },
          message: "Por favor contacte o administrador do sistema !",
        });
      });
  } else {
    res.status(500).render("error.pug", {
      error: {
        status: 500,
        stack: "Erro de servidor. Um erro inesperado aconteceu",
        url: req.headers.referer,
      },
      message: "Por favor contacte o administrador do sistema !",
    });
    return;
  }
};