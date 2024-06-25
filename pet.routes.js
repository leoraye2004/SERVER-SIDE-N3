module.exports = app => {
    const pets = require("../controllers/pet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Pet
    router.post("/", pets.create);
  
    // Retrieve all Pets
    router.get("/", pets.findAll);
  
    // Other routes...
  
    app.use('/api/pets', router);
  };