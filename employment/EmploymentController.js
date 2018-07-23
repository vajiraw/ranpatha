var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var employment = require('./Employment');
var logger = require('./../logger');

router.use(bodyParser.urlencoded({ extended: true }));


//get locations
//getserviceTypes

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
