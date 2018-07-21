var mongoose = require('mongoose');
var logger = require('./logger');

mongoose.connect('mongodb://192.168.1.2:27017/ranpatha',{ useNewUrlParser: true });

mongoose.set("debug", (collectionName, method, query, doc) => {
    //logger.log(`${collectionName}.${method}`, JSON.stringify(query), doc);

    logger.log({level: 'info', message: collectionName,method, query,doc});
});
