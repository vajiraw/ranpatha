var express = require('express');
var app = express();
var db = require('./db'); //ADD THIS LINE



// ADD THESE TWO LINES
var UserController = require('./user/UserController');
app.use('/users', UserController);

var LocationController = require('./location/LocationController');
app.use('/locations', LocationController);

var ItemTypeController = require('./itemtype/ItemTypeController');
app.use('/itemtypes', ItemTypeController);

var BusinessController = require('./business/BusinessController');
app.use('/business', BusinessController);

var EmploymentController = require('./employment/EmploymentController');
app.use('/services', EmploymentController);

var sendMail = require('./sendmail');
app.use('/mailer', sendMail);

module.exports = app;
