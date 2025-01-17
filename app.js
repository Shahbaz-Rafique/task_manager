var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./utils/connection');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var addtaskRouter = require('./routes/addtask');
var getTasksRouter = require('./routes/getTasks');
var changeStatusRouter = require('./routes/changeStatus');
var getPositionsRouter = require('./routes/getPositions');
var deleteTaskRouter = require('./routes/deletetask');
var updatetaskRouter = require('./routes/updateTask');
var updateDetailsRouter = require('./routes/updateDetails');

var app = express();
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/register', registerRouter);
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/addtask', addtaskRouter);
app.use('/api/v1/gettasks', getTasksRouter);
app.use('/api/v1/changestatus', changeStatusRouter);
app.use('/api/v1/getPositions', getPositionsRouter);
app.use('/api/v1/deletetask', deleteTaskRouter);
app.use('/api/v1/updatetask', updatetaskRouter);
app.use('/api/v1/updatedetails', updateDetailsRouter);

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
  res.render('error');
});

module.exports = app;
