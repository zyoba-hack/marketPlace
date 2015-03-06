module.exports = function (app) {
  app.get('/views/buyers/partials/:urlname', function(req,res){
  	console.log("hi");
  	res.render("buyers/partials/"+req.params.urlname);
  });
  
 
}


