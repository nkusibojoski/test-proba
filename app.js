const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exphbs = require('express-handlebars')

const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session')
const  passport = require('passport');

const app = express();

const CategoryService = require('./services/category/CategoryService')

const authRouter = require('./routes/Auth')
const postRouter = require('./routes/Post')
const categoryRouter = require('./routes/Category')
const indexRouter = require('./routes/Index')

// Create `ExpressHandlebars` instance with a default layout.
const hbs = exphbs.create({
  partialsDir: path.join(__dirname, './views/partials'),
  layoutsDir: path.join(__dirname, './views/layouts'),
  defaultLayout: 'main',
  extname: '.hbs'
});

// Register `hbs` as our view engine using its bound `engine()` function.
app.set('views', path.join(__dirname, './views/'));

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());

app.use(session({ secret: process.env.SESSION_SECRET || 'nikolaKey',resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());
require('./services/passport/passport')();

//check if logged in
app.use(function (req, res, next) {
  res.locals.login = req.isAuthenticated();
  next();
});

app.use('/auth', authRouter)
app.use('/post', postRouter)
app.use('/category', categoryRouter)
app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
