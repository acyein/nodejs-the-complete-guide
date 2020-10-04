const express = require('express');

const app = express();

const users = [];

app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: 'Add User'
    });
});

app.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'Users',
        users: users
    });
});

app.post('/add-user', (req, res, next) => {
    users.push({
        name: req.body.username
    });
    res.redirect('/users');
});

app.listen(3000, () => {
    console.log('Server is running');
});