const mongoose = require("mongoose");
const AnimalSchema = new mongoose.Schema({
	name: {
		type:String,
		required:[true, "Name is required"],
		minlength:[3, "Name must be at least 3 characters"],
        unique:[true, "Name must be unique"]
	},
	type: {
		type:String,
		required:[true, "Pet Type is required"],
		minlength:[3, "Pet Type must be at least 3 characters"]
	},
    description: {
		type:String,
		required:[true, "Description is required"],
		minlength:[3, "Description must be at least 3 characters"]
	},
    skill1: {
		type:String,
		required:[false, "Skills are optional"],
	},
    skill2: {
		type:String,
		required:[false, "Skills are optional"],
	},
    skill3: {
		type:String,
		required:[false, "Skills are optional"],
	},
},{timestamps:true});

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;