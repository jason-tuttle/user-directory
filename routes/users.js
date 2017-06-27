const data = require('../models/data');

const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// serve static files like CSS from a 'static' directory
// router.use('/static', express.static('/public'));

// serve up the index page with the index template, and send it the users data
router.get('/', function(req, res) {
  res.render('index', { users: data.users })
});

router.get('/user/:id/', function(req, res) {
  res.render('user', { user: data.users[req.params.id - 1] });
});

module.exports = router;
