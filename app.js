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

module.exports = app;
