var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var employment = require('./employment');
var logger = require('./../logger');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/home', function (req, res) {
  console.log('locations for services get called' );

      res.status(200).send("welcome to ranp service home");

});


//get locations : http://192.168.1.2:3000/services/locations
router.get('/locations', function (req, res) {
  console.log('locations for services get called' );
  employment.distinct("location", function (err, employments) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(employments);
  });
});

//getserviceTypes http://192.168.1.2:3000/services/horana/serviceTypes
router.get('/:location/serviceTypes', function (req, res) {
  console.log('locations for servicesTypes get called' +req.params.location);
  employment.distinct("service",{ location: req.params.location },function (err, employments) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(employments);
  });
});

// get all persons for service and location who are active
// http://192.168.1.2:3000/services/horana/accountant
router.get('/:location/:serviceTypes', function (req, res) {
  console.log('http://192.168.1.2:3000/services/horana/accountant' );
  employment.find({location: req.params.location,service:req.params.serviceTypes, active:"Active"}, function (err, employments) {
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
router.get('/', function (req, res) {
  console.log('Services Controller get called' );
  employment.find({}, function (err, employments) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(employments);
  });
});

module.exports = router;
