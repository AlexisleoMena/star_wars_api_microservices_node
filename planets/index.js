const server = require("./src/server");

server.listen(8003, () => {
  console.log('planets service listening on port 8003');
});
