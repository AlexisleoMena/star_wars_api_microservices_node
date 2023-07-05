const { Schema } = require("mongoose");

const filmSchema = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [{ type: String, ref: "Character" }],
  planets: [{ type: String, ref: "Planet" }],
});

filmSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.add = async function (film) {
  const newFilm = await this.create(film);
  return await this.findById(newFilm._id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.update = async function (id, film) {
  return await this.findByIdAndUpdate(id, film, { new: true })
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.delete = async function (id) {
  return await this.findByIdAndDelete(id);
};


module.exports = filmSchema;
