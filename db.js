var mongoose = require('mongoose');
var logger = require('./logger');

//mongoose.connect('mongodb://192.168.1.2:27017/ranpatha',{ useNewUrlParser: true });
mongoose.connect('mongodb://root:pa55words@ds145951.mlab.com:45951/CloudFoundry_oa66lupt_b867veup',{ useNewUrlParser: true });
//mongodb://<dbuser>:<dbpassword>@ds145951.mlab.com:45951/CloudFoundry_oa66lupt_b867veup
mongoose.set("debug", (collectionName, method, query, doc) => {
    //logger.log(`${collectionName}.${method}`, JSON.stringify(query), doc);

    console.log({level: 'info', message: collectionName,method, query,doc});
});
