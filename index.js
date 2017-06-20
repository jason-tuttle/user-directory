const data = require('./data');

const express = require('express');
const app = express();
const path = require('path');
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// serve static files like CSS from a 'static' directory
app.use('/static', express.static(path.join(__dirname, 'public')));

// serve up the index page with the index template, and send it the users data
app.get('/', function(req, res) {
  res.render('index', { users: data.users })
});

app.get('/user/:id/', function(req, res) {
  res.render('user', { user: data.users[req.params.id - 1] });
});

app.listen(3000, function () {
  console.log('Successfully started user-directory application!');
})
