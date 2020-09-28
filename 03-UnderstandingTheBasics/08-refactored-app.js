const http = require('http');

const routes = require('./08-routes');

const server = http.createServer(routes);

server.listen(3000, () => {
    console.log('Server has started');
});