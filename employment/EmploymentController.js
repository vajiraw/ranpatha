var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var employment = require('./employment');
var employmenttype = require('./employmenttype');
var location = require('./location');
var logger = require('./../logger');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/home', function (req, res) {
  console.log('locations for services get called' );
  res.status(200).send("welcome to ranp service home");
});

// get all Divisional secreatariate
//http://192.168.1.2:3000/services/dvs
//https://ranpatha.cfapps.io/services/dvs/
//router.get('/dvs', function (req, res) {
//  location.find({},{_id:0,id:1, name : 1 ,sort: "name"} ,function(err, results) {
//    if (err) return res.status(500).send("There was a problem finding the users.");
//    res.status(200).send(results);
//  }).sort("name");
//});

router.get('/dvs', function (req, res) {
  employment.distinct("ds",function(err, results) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(results);
  });
});

// NO NEED WITH NEW CGHANGE
// get all locations for Divisional secreatariate --
//http://192.168.1.2:3000/services/dvs/Horana
router.get('/dvs/:divisionsname', function (req, res) {
  console.log('locations for services get called '+req.params.location );
  location.find({name: req.params.divisionsname} ,function(err, results) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(results);
  }).sort("name").limit(3);
});

// this methid is to list the services of self or prof
//http://192.168.1.2:3000/services/self
//http://192.168.1.2:3000/services/prof
//router.get('/:type', function (req, res) {
//  console.log('service types requested for : '+req.params.type);
  //employment.find("service" ,function(err, results) {
//  employmenttype.find({type:req.params.type} ,function(err, results) {
//    if (err) return res.status(500).send("There was a problem finding the users.");
//    res.status(200).send(results);
//  });
//});

router.get('/:type', function (req, res) {
  console.log('service types requested for : '+req.params.type);
  //employment.find("service" ,function(err, results) {
  employment.distinct("service",{type:req.params.type},function(err, results) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(results);
  });
});


// getall service providers for location - (gurugoda), servicetype -(astrologer) for self employees
//selfemployedpersonsforservice
//http://192.168.1.2:3000/services/self/Aluminium/Horana
router.get('/self/:servicetype/:ds/', function (req, res) {
  console.log('division '+req.params.ds+' service '+req.params.servicetype);
  employment.find({service:req.params.servicetype,
    ds:req.params.ds,
    type:'self',
    status: 'active',},
    {_id:0,id:0,type:0,ds:0,status:0,service:0},
    function(err, results) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(results);
  }).sort('name').limit(4);
});


//http://192.168.1.2:3000/services/prof/lawyer/Horana
router.get('/prof/:servicetype/:ds/', function (req, res) {
  console.log('division '+req.params.ds+' service '+req.params.servicetype);
  employment.find({service:req.params.servicetype,
    ds:req.params.ds,
    type:'prof',
    status: 'active',},
    {_id:0,id:0,type:0,ds:0,status:0,service:0},
    function(err, results) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(results);
  }).sort('name').limit(4);
});









/// following methods not in use

//https://stackoverflow.com/questions/24806721/mongodb-how-to-find-10-random-document-in-a-collection-of-100
router.post('/', function (req, res) {
  console.log('Services Controller post called  ' +req.params.order);
  employment.create({

            name : req.body.name,
            address :  req.body.address,
            location : req.body.locations,
            displyOrder : parseInt("2")

        },
        function (err, employment) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(employment);
        });
});

// this is test method to get all services for locations
//https://ranpatha.cfapps.io/services/
router.get('/', function (req, res) {
  console.log('Services Controller get called' );
  employment.find({}, function (err, employments) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(employments);
  });
});

module.exports = router;





//test url for all service personals http://192.168.1.2:3000/services/
//get locations for all service http://192.168.1.2:3000/services/Bulathsinhala/
//get service types in location http://192.168.1.2:3000/services/Bulathsinhala/???
// get locations of services available http://192.168.1.2:3000/services/locations

// get service personals for service and location https://ranpatha.cfapps.io/services/BULATHSINHALA




// mlab url https://mlab.com/databases/CloudFoundry_oa66lupt_b867veup/collections/employments?saved=1532596164321&q=&s=&f=&pageSize=10&pageNum=0
