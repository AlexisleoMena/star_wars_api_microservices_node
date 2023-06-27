const Films = require("./films.json");

module.exports = {
  list: async () => {
    return Films;
  },
  get: async (id) => {
    return Films.find(c => c.id === id);
  }
}