const db = require("../models");
const Tutor = db.tutor;

exports.create = (req, res) => {
  if (!req.body.cpf || !req.body.nome || !req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const tutor = {
    cpf: req.body.cpf,
    nome: req.body.nome,
    email: req.body.email
  };

  Tutor.create(tutor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutor."
      });
    });
};

exports.findAll = (req, res) => {
  Tutor.findAll({ include: ["pets"] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutors."
      });
    });
};