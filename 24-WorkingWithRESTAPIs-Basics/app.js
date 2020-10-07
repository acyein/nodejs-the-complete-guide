const express = require('express');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(express.urlencoded()); // x-www-form-urlencoded <form>
app.use(express.json()); // application/json in header

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.listen(8080);