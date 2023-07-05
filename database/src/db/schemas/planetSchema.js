const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: "Character" }],
  films: [{ type: String, ref: "Film" }],
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.add = async function (planet) {
  const newPlanet = await this.create(planet);
  return await this.findById(newPlanet._id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.update = async function (id, planet) {
  return await this.findByIdAndUpdate(id, planet, { new: true })
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.delete = async function (id) {
  return await this.findByIdAndDelete(id);
};


module.exports = planetSchema;
