var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'wike1911@gmail.com',
            pass: 'V@753241809'
        }
});
let mailOptions = {
          from: '"Ranpatha Admin" <wike1911@gmail.com>', // sender address
          to: 'vajirawke@gmail.com', // list of receivers
          subject: 'sample', // Subject line
          text: '2nd test match between SL and SA', // plain text body
          html: '<b>NodeJS Email Tutorial</b>' // html body
      };


module.export = transporter;
