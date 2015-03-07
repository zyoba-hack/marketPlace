var user = require('./user');
var mw = require('../middleware');
var cg = require('./categories');
var buyers=require('./buyers');

var sellers = require('./sellers');
module.exports = function (app) {
  app.get('/api/categories', cg.getList, mw.respond, mw.error);
  app.get('/buyers',buyers.index);
  require('./categories')(app);
  require('./sellers')(app);
  require('./product')(app);
}
