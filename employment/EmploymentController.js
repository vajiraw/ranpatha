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
router.get('/dvs', function (req, res) {
  location.find({},{_id:0,id:1, name : 1 ,sort: "name"} ,function(err, results) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(results);
  }).sort("name").limit(3);
});

// get all locations for Divisional secreatariate
//http://192.168.1.2:3000/services/dvs/Horana
router.get('/dvs/:divisionsname', function (req, res) {
  console.log('locations for services get called '+req.params.location );
  location.find({name: req.params.divisionsname} ,function(err, results) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(results);
  }).sort("name").limit(3);
});


//http://192.168.1.2:3000/services/self
// this method signature can be changed to handle professional and
// foe self employment this type is self
// for professional employment this type is prof
router.get('/:type', function (req, res) {
  console.log('locations for services get called ');
  //employment.find("service" ,function(err, results) {
  employmenttype.find({type:req.params.type} ,function(err, results) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(results);
  });
});


// getall service providers for location - (gurugoda), servicetype -(astrologer) for self employees
//selfemployedpersonsforservice
//http://192.168.1.2:3000/services/self/Aluminium%20Fitters/Horana

router.get('/self/:servicetype/:location/', function (req, res) {
  console.log('locations for services  '+req.params.location);
  console.log('type for services '+req.params.servicetype);

  employment.find({service:req.params.servicetype,
    //location:req.params.location,
    type:'self',
    status: 'active',
    },
{_id:0},
    function(err, results) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(results);
  }).sort('providers.name').limit(4);
});

//'providers.location':{$elemMatch:  req.params.location}
//db.products.aggregate([{$sample: {size: 10}}]);

//service:req.params.servicetype,type:'self',









/// following methods not in use

//https://stackoverflow.com/questions/24806721/mongodb-how-to-find-10-random-document-in-a-collection-of-100
















//get locations : http://192.168.1.2:3000/services/locations
// https://ranpatha.cfapps.io/services/locations
router.get('/locations', function (req, res) {
  console.log('locations for services get called' );
  employment.distinct("location", function (err, employments) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(employments);
  });
});

//getserviceTypes http://192.168.1.2:3000/services/horana/serviceTypes
router.get('/:location', function (req, res) {
  console.log('locations for servicesTypes get called' +req.params.location);
  employment.distinct("service",{ location: req.params.location },function (err, employments) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(employments);
  });
});

// get all persons for service and location who are active
// http://192.168.1.2:3000/services/horana/accountant
router.get('/:location/:types', function (req, res) {
  employment.find({location: req.params.location,service:req.params.types, active:"Active"}, function (err, employments) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(employments);
  });
});



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
