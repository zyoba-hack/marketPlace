var user = require('./user');
var mw = require('../middleware');
<<<<<<< HEAD
var cg = require('./categories');
module.exports = function (app) {

  app.get('/', function(req, res, next) {
  	res.render('buyers')
  });
  app.get('/api/categories', cg.getList, mw.respond, mw.error);

=======
var buyers=require('./buyers')
module.exports = function (app) {

  app.get('/login', user.collect, user.validate, user.render, mw.error);
  app.get('/buyer',buyers.index);
>>>>>>> 63f2d4bcc5f96016668358f95f57756bee4801ed
}