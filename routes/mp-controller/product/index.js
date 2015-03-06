'use strict';
var product = require('./product');
var mw = require('../../middleware');

module.exports = function (app) {

	// to add product
	app.post('/api/addProduct', product.collect, product.add, mw.respond, mw.error);
	
	// to get the product list 
	app.post('/api/getProduct',product.fetchProduct, mw.respond, mw.error);



};
