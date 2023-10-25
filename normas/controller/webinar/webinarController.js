require("dotenv").config();

const webinar = require("../../models/webinars");
const { validationResult } = require("express-validator");
const fs = require("fs");
const { basicFormat } = require("../../public/javascripts/utils");

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
  const webinars = await webinar.findAll({
    attributes: ["id", "tema","url", "data", "resumo"],
    // include: [
    //   {
    //     model: User,
    //     as: "users",
    //     attributes: ["id", "first_name", "last_name"],
    //     through: {
    //       where: { is_managed: 1 },
    //       order: [["created", "DESC"]],
    //       limit: 1,
    //     },
    //   },
    // ],
  });
  // return res.json(sectors);
     return res.json(webinars);

  // return res.render("sector/index", {
  //   sectors: sectors,
  //   title: "Sectores",
  // });
};

exports.create = async (req, res, next) => {
  try {
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //   return res.json({
    //     errors: errors.mapped(),
    //     values: req.body,
    //     title: "Registo de webinar",
    //   });
    // }

    const { tema, data, url, resumo } = req.body;
    const file_name = req.file.path;

    const web = await new webinar({
      tema: tema,
      data: data,
      url: url,
      file_name: file_name,
      resumo: resumo
    }).save();
    return res.json({
      webinar: web,
      title: "Novo webinar adicionado",
    });
    // return res.json({ body: document, status: 200 });
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
  // } catch (error) {
  //   next(error);
  // }
};

// Views
exports.creatView = (req, res) => {
  res.render("webinars/create", { title: "Registo de webinar" });
};

exports.editSectorView = async (req, res) => {
  const sector = await Sector.findOne({
    where: { id: req.params.id },
    attributes: ["id", "name", "created", "updated"],
    include: [
      {
        model: User,
        as: "users",
        attributes: ["id", "first_name", "last_name"],
        through: {
          where: { is_managed: 1 },
          order: [["created", "DESC"]],
          limit: 1,
        },
      },
    ],
  });

  if (!sector) {
    return res.json({ status: 404, message: "webinar não encontrado" });
    // res.status(404).render("error.pug", {
    //   error: {
    //     status: 404,
    //     stack: "Sector não encontrado",
    //     url: req.headers.referer,
    //   },
    //   message: "Sector não encontrado",
    // });
  } else {
    return res.json({ status: 200, sector: sector });
  }
  // res.render("sector/edit", { title: "Detalhes do sector", sector: sector });
};

exports.CallWEBINAR = function (req, res, next) {
  // return res.json({'hi': 'Man'})
  return res.redirect(
    `http://localhost:3001?q=${req.params.url}&name=${req.query.tema}&type=${req.query.type}`
  );
};

// PDF View
exports.viewWebinar = async (req, res) => {
  const Webinar = await webinar.findOne({
    where: {
      url: req.params.url,
    },
  });
  if (Webinar) {
    const path = Webinar.file_name;

    if (fs.existsSync(path)) {
      res.contentType("application/pdf");
      res.setHeader(
        "Content-Type",
        "video/mp4",
        "Content-Disposition",
        `inline;filename=${Webinar.tema}`
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


//Update Sector

exports.update = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("sector/edit", {
        errors: errors.mapped(),
        values: req.body,
        title: "Detalhes do webinar",
      });
    }

    const { name, user_id } = req.body;

    const sector = await Sector.findOne({ where: { id: req.params.id } });
    sector.name = name;
    sector.save();

    const sectorUser = await SectorsUsers.findOne({
      where: { sectorId: req.params.id, is_managed: true },
    });
    //Create a new

    if (sectorUser) {
      const odlUser = await User.findOne({ where: { id: sectorUser.userId } });
      if (sectorUser.userId != user_id) {
        await new SectorsUsers({
          sectorId: sector.id,
          userId: user_id,
          is_managed: 1,
        }).save();

        odlUser.role = "basic";
        odlUser.save();

        const newUser = await User.findOne({
          where: { id: sectorUser.userId },
        });

        sectorUser.is_managed = 0;
        sectorUser.save();
        newUser.role = "basic";
        newUser.save();
        req.flash("info", "Sector actualizado com alteração do supervisor");
        res.redirect("/sectores");
      }
    } else {
      req.flash("info", "Sector actualizado");
      res.redirect("/sectores");
    }
  } catch (error) {
    next(error);
  }
};

exports.showSectorView = async (req, res) => {
  const sectores = await Sector.findOne({
    where: { id: req.params.id },
    attributes: ["id", "name", "created", "updated"],
    include: [
      {
        model: User,
        as: "users",
        attributes: ["id", "first_name", "last_name"],
        through: {
          where: { is_managed: 1 },
          order: [["created", "DESC"]],
        },
      },
    ],
  });

  // return res.json(sectores)

  if (!sectores) {
    res.status(404).render("error.pug", {
      error: {
        status: 404,
        stack: "webinar não encontrado",
        url: req.headers.referer,
      },
      message: "webinar não encontrado",
    });
  }
  res.render("sector/show", { title: "Detalhes do webinar", sector: sectores });
};