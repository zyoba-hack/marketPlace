
var categories = require("./categories");
var mw = require('../../middleware');


module.exports=function(app){
    app.get('/api/categories/list' ,categories.getList ,mw.respond ,mw.error);
    
    // app.post('/api/categories/add', categories.collect, categories.addList, mw.respond, mw.error);
}

