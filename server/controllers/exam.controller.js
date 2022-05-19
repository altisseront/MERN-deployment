const Animal = require("../models/exam.model");

module.exports.hello = (req, res) => {
  res.json({msg:"hello animal api working"})
}

module.exports.findAllAnimals = (req, res) => {
  Animal.find()
    .then(allDaAnimals => res.json({ animals: allDaAnimals }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleAnimal = (req, res) => {
	Animal.findOne({ _id: req.params.id })
		.then(oneSingleAnimal => res.json({ animal: oneSingleAnimal }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewAnimal = (req, res) => {
  Animal.create(req.body)
    .then(newlyCreatedAnimal => res.json({ animal: newlyCreatedAnimal }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingAnimal = (req, res) => {
  Animal.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators:true })
    .then(updatedAnimal => res.json({ animal: updatedAnimal }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingAnimal = (req, res) => {
  Animal.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
