var Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;

//module.exports = new Db(settings.db, new Server(settings.host, 27017, {}), {safe: true});
var dbconfig = {
    url: 'mongodb://localhost:27017/qindb'
};

// module.exports = new Db('qindb', new Server('localhost', 27017));
module.exports = dbconfig;
