// server.js
var app = require('./app');


var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '192.168.1.2'
var server_port = process.env.PORT || 3000;


var server = app.listen(server_port, function() {
  console.log( "Nodejs app Listening on " + server_ip_address + ", port " + server_port )
});



// cloud foundry https://docs.cloudfoundry.org/buildpacks/node/node-tips.html

//https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09  sample app use for this application
// startup project -- https://medium.com/of-all-things-tech-progress/5-steps-to-build-a-rest-api-in-node-js-with-mongodb-e1f2113a39bd
