var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/home', function (req, res) {
  console.log('this is home for intlController' );
  res.contentType('application/json');
  res.status(200).send("This is the home for intel business");
});

router.get('/countries', function (req, res) {
  console.log('this is home for intlController' );
  res.contentType('application/json');
  res.status(200).send([{"id":"1","name":"SriLanka"},{"id":"2","name":"Japan"}]);
});



module.exports = router;
