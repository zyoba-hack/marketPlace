var user = require('./user');
var mw = require('../middleware');
var cg = require('./categories');
module.exports = function (app) {

  app.get('/', function(req, res, next) {
  	res.render('buyers')
  });
  app.get('/api/categories', cg.getList, mw.respond, mw.error);

}