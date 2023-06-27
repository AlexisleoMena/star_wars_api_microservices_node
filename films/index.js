const server = require("./src/server");

server.listen(8002, () => {
  console.log(`Film service listening on port 8002 --> http://localhost:8002`);
});
