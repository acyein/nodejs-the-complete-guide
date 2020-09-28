const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url, req.method, req.headers); // / GET {header meta data} or /hello GET {header meta data}
    // process.exit(); // ends event loop
})

server.listen(3000);