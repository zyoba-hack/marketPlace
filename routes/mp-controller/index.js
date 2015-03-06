var user = require('./user');
var mw = require('../middleware');
var buyers=require('./buyers')
module.exports = function (app) {

  app.get('/login', user.collect, user.validate, user.render, mw.error);
  app.get('/buyer',buyers.index);
}