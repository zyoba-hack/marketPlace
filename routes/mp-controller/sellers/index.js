var stock = require("./stock");
var sellers = require('./sellers');
var mw = require('../../middleware');


module.exports=function(app){
    app.get('/api/seller/stock'
            // ,sellers.collect
            ,mw.respond
            ,mw.error
            );
    app.post('/api/seller/stock', stock.collect, stock.validate, stock.add, mw.respond, mw.error);

    app.get('/api/seller'
         // , sellers.collect
         // , sellers.validate
         // , sellers.add
         , mw.respond, mw.error
         );

    app.post('/api/seller', sellers.collect, sellers.validate, sellers.add, mw.respond, mw.error);
}


