var sellers = require("./sellers");
var mw = require('../../middleware');


module.exports=function(app){
    app.get('/api/seller/stock'
            ,mw.respond
            ,mw.error
            );
    app.post('/api/seller/stock', sellers.collect, sellers.validate, sellers.add, mw.respond, mw.error);
}


