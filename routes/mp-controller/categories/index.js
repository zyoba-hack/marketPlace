// var user = require('./user');
// var mw = require('../middleware');
// var cg = require('./categories');
var buyers_obj=require('./buyer/buyer');
module.exports = function (app) {

  app.get('/buyers',buyers_obj.index);
  // app.get('/buyers',function(req,res){
  // 	res.render('buyers')
  // })
  // app.get('/api/categories', cg.getList, mw.respond, mw.error);

}