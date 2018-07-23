var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var User = require('./user');

// CREATES A NEW USER
router.post('/', function (req, res) {
  console.log('user post called' );
    User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });

});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/all', function (req, res) {
  console.log('user get called' );

    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });

});


router.get('/key', function (req, res) {
  console.log('user get called' );

    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send({ a: 1 });
    });

});




module.exports = router;
