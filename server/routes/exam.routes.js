const AnimalController = require("../controllers/exam.controller");

module.exports = app => {
  app.get("/api", AnimalController.hello)
  app.get("/api/animals", AnimalController.findAllAnimals);
  app.get("/api/animals/:id", AnimalController.findOneSingleAnimal);
  app.put("/api/animals/:id", AnimalController.updateExistingAnimal);
  app.post("/api/animals", AnimalController.createNewAnimal);
  app.delete("/api/animals/:id", AnimalController.deleteAnExistingAnimal);
};