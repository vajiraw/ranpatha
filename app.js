var express = require('express');
var app = express();
var db = require('./db'); //ADD THIS LINE

app.use(express.static('data/images'));

// ADD THESE TWO LINES
var UserController = require('./user/UserController');
app.use('/users', UserController);



var ItemTypeController = require('./itemtype/ItemTypeController');
app.use('/itemtypes', ItemTypeController);

var BusinessController = require('./business/BusinessController');
app.use('/business', BusinessController);

var EmploymentController = require('./employment/EmploymentController');
app.use('/services', EmploymentController);

var IntlController = require('./internationalbusiness/intlController');
app.use('/intBusiness', IntlController);

var sendMail = require('./sendmail');
app.use('/mailer', sendMail);

module.exports = app;
