var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

const winston = require('winston');


var location = require('./location');


router.post('/', function (req, res) {
  console.log('user post called' );
    location.create({
            loc_id : req.body.loc_id,
            name : req.body.name
        },
        function (err, location) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(location);
        });
});



router.get('/all', function (req, res) {
  console.log('Location get called' );
    location.find({}, function (err, locations) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(locations);
    });

});


module.exports = router;
