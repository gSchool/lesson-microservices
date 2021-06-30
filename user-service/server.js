var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', function(req, res, next) {
  res.send({ service: 'user-service' });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).end();
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

const port = 5020;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
module.exports = app;