module.exports = function (app) {
  app.get('/views/buyers/partials/:urlname', function(req,res){
  	res.render("buyers/partials/"+req.params.urlname);
  });
   app.get('/views/login/partials/:urlname', function(req,res){
  	res.render("login/partials/"+req.params.urlname);
  });
  
 
}


