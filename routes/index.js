module.exports = function (app) {
  require('./mp-controller')(app);
  require('./angular_controller')(app);
  app.get('/buyer',function(req,res,next){
  	res.render('buyers/partials/index')
  })
};