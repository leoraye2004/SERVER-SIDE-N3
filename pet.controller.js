const db = require("../models");
const Pet = db.pet;
const Altura = db.altura;

exports.create = async (req, res) => {
  if (!req.body.codigo_pet || !req.body.nome_pet || !req.body.genero_pet || !req.body.altura_pet || !req.body.tutorId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  let alturaId;
  if (req.body.altura_pet <= 13) {
    const altura = await Altura.findOne({ where: { descricao: "pequeno" } });
    alturaId = altura.id;
  } else if (req.body.altura_pet > 13 && req.body.altura_pet < 40) {
    const altura = await Altura.findOne({ where: { descricao: "médio" } });
    alturaId = altura.id;
  } else {
    const altura = await Altura.findOne({ where: { descricao: "alto" } });
    alturaId = altura.id;
  }

  const pet = {
    codigo_pet: req.body.codigo_pet,
    nome_pet: req.body.nome_pet,
    genero_pet: req.body.genero_pet,
    altura_pet: req.body.altura_pet,
    tutorId: req.body.tutorId,
    alturaId: alturaId
  };

  Pet.create(pet)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Pet."
      });
    });
};

exports.findAll = (req, res) => {
  Pet.findAll({ include: ["tutor", "altura"] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pets."
      });
    });
};