var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var business = require('./business');
var businesstype = require('./businesstype');
//var logger = require('./logger');
var logger = require('./../logger');



router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function (req, res) {
  console.log('Business Controller invoked.. ' );
  res.status(200).send("welcome to ranp service home");
});

// this method used to get all categories
// http://localhost:3000/business/category
router.get('/category', function (req, res) {
    business.distinct("category" , function (err, businesstype) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(businesstype);
    });
});

//http://localhost:3000/business/automobile/subcategory/
router.get('/:category/subcategory', function (req, res) {
    business.distinct("sub_category",{category:req.params.category} , function (err, businesstype) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(businesstype);
    });
});

//http://localhost:3000/business/automobile/auto%20dealers
router.get('/:category/:subcategory', function (req, res) {
    business.find({category:req.params.category,sub_category:req.params.subcategory},{_id:0,category:0}, function (err, businesstype) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(businesstype);
    });
});




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









module.exports = router;

//https://gist.github.com/blackfalcon/8428401
//https://www.youtube.com/watch?v=rUhHScQthio

// https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches
