require('data');

const express = require('express');
const app = express();
const path = require('path');
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'));

function getInfo()

app.get('/', function(req, res) {
  app.render('index', { userInfo: })
});




app.listen(3000, function () {
  console.log('Successfully started user-directory application!');
})
