var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var business = require('./Business');
var BusinessType = require('./BusinessType');
//var logger = require('./logger');
var logger = require('./../logger');
var mailer = require('../mail.js')


router.use(bodyParser.urlencoded({ extended: true }));


router.post('/', function (req, res) {
  console.log('Business Controller post called' );

    business.create({
            item_id : req.body.Item_id,
            name : req.body.name
        },
        function (err, business) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(business);
        });
});







// this method use to return instittues that match submot subtype and city {need to include city here}
// --> http://localhost:3000/business/Colombo/org/Acc    +> http://localhost:3000/business/colombo/org/Acc
// this method has special regex to cater simple characters for location parameter

router.get('/:location/org/:subtype', function (req, res) { ///busniness/:subtype
  var loc = req.params.location;
  var subType = req.params.subtype;
  //console.log('Business Controller get called ' +subType);

  logger.log({level: 'info', message: 'Hello distributed log files!'});

  business.find({business_subtype:subType, location : { $regex : /Colombo/i  }}, function (err, businesses) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(businesses);
  });
});


// this method used to get BusinessTypes --->http://localhost:3000/business/maintypes
router.get('/maintypes', function (req, res) {


    BusinessType.find({ type: "main" } ,{ status: 0,_id: 0 } , function (err, businesstype) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(businesstype);
    }).sort({name:1});
});


//This method is used to get subtypes for a business type  http://localhost:3000/business/1000/subtypes/
router.get('/:maintype/subtypes/', function (req, res) {

    var maintype = req.params.maintype;

    BusinessType.find({ main_id: '1000' } ,{ status: 0,_id: 0 } , function (err, businesstype) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(businesstype);
    }).sort({name:1});
});



module.exports = router;

//https://gist.github.com/blackfalcon/8428401
//https://www.youtube.com/watch?v=rUhHScQthio
