

const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express ();
const userData = [
  {user: 'Meena', pass: 'singam'},
  {user: 'Johnny5', pass:'circuit'},
  {user: 'admin', pass: 'admin'}
];
console.log(userData);

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
function checkLogin(username, password) {
    if (req.session == 'login') {
      next()
    } else if (!== res.session) {
      res.render('login')
    } else {
      next()
    }
  }
})
  // / if req.url == '/login'
  //     //     next()
      // else if !req.session.login
      //     res.render('login')
      // else
      //     next()

app.get('/', function (req, res) {
  res.render('index')

})

app.post('/login', function (req, res) {
  console.log('username is ' + req.body.username);
  console.log('password is ' + req.body.password);
    for (let i = 0; i < data.length; i++) {
      if (req.body.username === [i].data.username, req.body.password === [i].data.username) {
          res.render('index')
      }
      else {
        res.render('login')
      }
    }
    })

  // loop through array to find username and password
   // if you find a match then set req.session.login =true
   // req.session.user = req.body.username
   // res.render('index')

   // if not then render login with an error message
   // res.render('login')

  res.render('index')
})

app.listen(3000, function () {
  console.log('Ciao');
})
