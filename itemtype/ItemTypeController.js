var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

const winston = require('winston');


var itemType = require('./ItemType');


router.post('/', function (req, res) {
  console.log('user post called' );
    itemType.create({
            item_id : req.body.Item_id,
            name : req.body.name
        },
        function (err, itemType) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(itemType);
        });
});


module.exports = router;

//https://stackoverflow.com/questions/18148166/find-document-with-array-that-contains-a-specific-value
