

const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express ();

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.urlencoded({extended: false }));
app.use(function (req,res,next) {
  console.log('in interceptor');
  next()
})

app.get('/', function (req, res) {
  res.render('index')

})

app.post('/login', function (req, res) {
  console.log('username is ' + req.body.username);
  console.log('password is ' + req.body.password);
  res.render('index')
})

app.listen(3000, function () {
  console.log('Ciao');
})
