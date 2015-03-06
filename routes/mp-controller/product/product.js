'use strict';

var pm = require('../../../models/market-place/product.js');
var sanitize = require('google-caja').sanitize;
var proc = require('proc-utils');

var product = {

  collect: function collect(req, res, next) {

  	var reqdata = {};
  	var fields = ['name','description','quantity','category','price','product_id'];
  	fields.forEach(function (entry) {
  	    /*console.log(entry);*/
  	    if (typeof req.body[entry] !== 'undefined') {
  	        reqdata[entry] = sanitize(req.body[entry]);
  	    }
  	});
  	var err = proc.utils.required(reqdata, ['name','description','category','price','quantity','product_id']);
  	if (err) return next(err);
  	req.nc_collectdata = reqdata;
  	next();

  },

  add: function add(req, res, next) {

  	pm.add(req.nc_collectdata,result);
  	function result(err,response){
  		if (err)
  			console.log(err)
  		else 
  			console.log(response)
  	};
    

  },

  fetchProduct : function fetchProduct(req,res,next){
  	pm.fetch({category:req.body['category']},result);
  	function result(err,response){
  		if (err)
  			console.log(err)
  		else 
  			console.log(response)
  		next();
  	};
  	 

  }
}

module.exports = product;