const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment 01</title></head>');
        res.write('<body><h1>Welcome!</h1>');
        res.write('<form action="/create-user" method="POST"><label for="username">Username</label><input type="text" name="username"><button type="submit">Add User</button></form>');
        res.write('<a href="/users">View users</a></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users List Page</title></head>');
        res.write('<body><h1>List of Users</h1></body>');
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul>');
        res.write('<a href="/">Back</a></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            // console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running!');
});