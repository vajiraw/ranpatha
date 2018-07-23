var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var employment = require('./Employment');
var logger = require('./../logger');

router.use(bodyParser.urlencoded({ extended: true }));


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


router.get('/', function (req, res) {
  console.log('Services Controller get called' );
  employment.find({}, function (err, employments) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(employments);
  });
});

module.exports = router;
