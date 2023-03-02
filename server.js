// require modules
const express = require('express');
const path = require('path');
const todoDb = require('./data/todo-db');

// create the express app
const app = express();

// configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// mount middleware (app.use)

// mount routes
app.get('/', function (req, res) {
    res.redirect('/home');
});

app.get('/home', function (req, res) {
    res.render('home');
})

app.get('/todos', function (req, res) {
    res.render('todos/index', {
        todos: todoDb.getAll()
    });
});

// tell the app to listen on port 3000
app.listen(3000, function () {
    console.log('Listening on port 3000');
});