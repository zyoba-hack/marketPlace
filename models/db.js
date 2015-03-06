'use strict';

/** Module dependencies */
var util = require('util');
var anydbsql = require('anydb-sql');
var config = require('../config').db;

/** Check if config is defined, abort if config is missing */
if (!config || !Object.keys(config).length) {
  throw new Error('db config missing');
}

/** Prepare db config in url form */
var dbConfig = {
  url: util.format('mysql://%s:%s@%s:%s/%s',
    encodeURIComponent(config.user),
    encodeURIComponent(config.password),
    config.host,
    config.port || 3306,
    config.database),
  connections: {
    min: 2,
    max: 10
  }
};

/** Intialize db connenction */
var db = anydbsql(dbConfig);

/** Export db object */
module.exports = db;

/** Test Code --------------------------------------------------------------- */
if (require.main === module) {
  (function () {
    var query = 'select now() as currdate';
    var logcb = function (err, res) {
      if (err) {
        console.log(err);
      } else {
        util.log(util.format('query: %s, result: %s', query, res.rows[0].currdate));
      }

      process.exit(1);
    };

    db.query(query, logcb);
  })();
}