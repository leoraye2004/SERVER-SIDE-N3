module.exports = app => {
    const tutors = require("../controllers/tutor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutor
    router.post("/", tutors.create);
  
    // Retrieve all Tutors
    router.get("/", tutors.findAll);
  
    // Other routes...
  
    app.use('/api/tutors', router);
  };