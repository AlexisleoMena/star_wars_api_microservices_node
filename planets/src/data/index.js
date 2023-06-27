const Planets = require("./planets.json");

module.exports = {
  list: async () => {
    return Planets;
  },
  get: async (id) => {
    return Planets.find(c => c.id === id);
  }
}