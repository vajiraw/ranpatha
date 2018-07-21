var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var logger = require('./logger');

var mail = require('./mail');
var nodemailer = require('nodemailer');

router.use(bodyParser.urlencoded({ extended: true }));

    
let mailOptions = {
          from: '"Krunal Lathiya" <wike1911@gmail.com>', // sender address
          to: 'vajirawke@gmail.com', // list of receivers
          cc: 'kuvawi@gmail.com',
          subject: 'sample', // Subject line
          text: '2nd test match between SL and SA', // plain text body
          html: '<b>NodeJS Email Tutorial</b>' // html body
      };

router.get('/', function (req, res) {
  logger.log({level: 'info', message: 'send mail called!'});
  var transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
         user: 'wike1911@gmail.com',
         pass: 'V@753241809'
       },
   });
   transporter.sendMail(mailOptions, function(error, info) {
       if (error) {
           console.log(error);
           return;
       }
       console.log('Message sent');
       transporter.close();
   });

res.status(200).send('mail sent to:: ');
});

module.exports = router;
