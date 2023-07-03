const server = require('./src/server');

server.listen(8004, () => {
  console.log('database service listening on port 8004')
})