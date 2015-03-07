var buyers_obj=require('./buyers');
module.exports = function (app) {

  app.get('/buyer',buyers_obj.index);
  // app.get('/buyers',function(req,res){
  // 	res.render('buyers')
  // })
  // app.get('/api/categories', cg.getList, mw.respond, mw.error);

}