const server = require("./src/server");

server.listen(8003, () => {
  console.log(`Planet service listening on port 8003 --> http://localhost:8003`);
});
