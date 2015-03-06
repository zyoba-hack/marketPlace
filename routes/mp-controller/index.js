var user = require('./user');
var mw = require('../middleware');
var cg = require('./categories');
var buyers=require('./buyers');
module.exports = function (app) {
  app.get('/api/categories', cg.getList, mw.respond, mw.error);
  app.get('/login', user.collect, user.validate, user.render, mw.error);
  app.get('/buyer',buyers.index);
}
