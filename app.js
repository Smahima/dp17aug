const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const users = [{
    username: 'Meena',
    password: 'singam'
  },
  {
    username: 'Johnny5',
    password: 'circuit'
  },
  {
    username: 'admin',
    password: 'admin'
  }
];

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(function(req, res, next) {
  console.log('in interceptor');
  if (req.url === '/login') {
    console.log('hey');
    next()
  }
    else if (!req.session.username) {
    console.log('gurl');
    res.render('login')
    }
    else {
      console.log('bongo');
      next()
    }
})

app.get('/', function(req, res) {
  console.log('mango');
  res.render('index');
})

app.post('/login', function(req, res) {
  console.log('username is ' + req.body.username);
  console.log('password is ' + req.body.password);
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].username);
    console.log(users[i].password);
    if (users[i].username === req.body.username && users[i].password === req.body.password) {
      // console.log('hell yeah');
      req.session.username = req.body.username
      console.log(req.session.username)

    }
    }
    if (req.session.username === req.body.username) {
      res.render('index')
    }
    else {
      res.render('login', {error: 'Username and Password not entered'})
    }
})

app.listen(3000, function() {
  console.log('Ciao');
})
