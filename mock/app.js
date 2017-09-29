var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var settings = require('../config')
var session    = require('express-session');
var MongoStore = require('connect-mongo')(session);
var indexR = require('./routes/index');
var novelR = require('./routes/novel');
var ajaxReturn = require('./middlewares/ajaxReturn');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('qin'));
app.use(ajaxReturn);
app.use(flash());
app.use(session({
    secret: settings.cookieSecret,
    store: new MongoStore({
        url: 'mongodb://localhost/qindb',
        autoRemove:'native'
    })
}));

//定义本地变量
app.use(function(req, res, next){
  console.log("app.usr local");
  res.locals.user = req.session.user;
  res.locals.post = req.session.post;
  var error = req.flash('error');
  res.locals.error = error.length ? error : null;
 
  var success = req.flash('success');
  res.locals.success = success.length ? success : null;
  next();
});
app.use('/', indexR);
app.use('/novel', novelR);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);   
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500); 
});

// var server = app.listen(3000);
// console.log('exxpress server listening on port %d in %s mode', server.address().port, app.settings.env)
module.exports = app;