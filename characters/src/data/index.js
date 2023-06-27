const characters = require("./characters.json");

module.exports = {
  list: async () => {
    return characters;
  },
  get: async (id) => {
    return characters.find(c => c.id === id);
  }
}