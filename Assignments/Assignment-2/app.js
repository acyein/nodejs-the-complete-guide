const express = require('express');

const app = express();

// General middleware
// app.use((req, res, next) => {
//     console.log('First middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second middleware');
//     next();
// });

// Specific middleware
app.use('/users', (req, res, next) => {
    console.log('Users middleware');
    res.send('<h1>Good day, user</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Home middleware');
    res.send('<h1>Welcome home, stranger</h1>');
});

app.listen(3000, () => {
    console.log('Server is running...');
});