const server = require("./src/server");

server.listen(8001, () => {
  console.log(`Character service listening on port 8001 --> http://localhost:8001`);
});
