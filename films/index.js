const server = require("./src/server");

server.listen(8002, () => {
  console.log('films service listening on port 8002');
});
