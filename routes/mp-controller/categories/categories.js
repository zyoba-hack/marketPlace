var categories = require('../../../models/market-place/categories');
var cg = {

	getList : function(req, res, next) {
		categories.fetch({}, null, cb);
		function cb(err, datas) {
			if(err)
				console.log(err);
			else
				res.send(datas);
		}
	},
	collect: function collectfc(req, res,next){
        var reqdata = {};
        // console.log(required);
        var fields = ['name'];
        fields.forEach(function (entry) {
            if (typeof req.body[entry] !== 'undefined' || '') {
                reqdata[entry] = sanitize(req.body[entry]);
            }
        });
        req.collecteddata = reqdata;
        console.log(reqdata);
        // console.log(JSON.stringify(req.nc_collectdata));
        next();
    },
    addList: function addfn(req, res, next){
        categories.add(req.collecteddata, added);
        function added(err, result){
            console.log('inside added');
            if(err) return next(err);
            if(!err && result){
                req.cdata={
                    success:1,
                    error: 0,
                    data:result,
                    message:"Categories successfully added"
                };
                next();
            }
        }
    }
  }
	/*getList : function(req, res, next) {
		categories.fetch({}, null, cb);
		function cb(err, datas) {
			if(err)
				console.log(err);
			else
				res.send(datas);
		}
	},
	 add: function addfn(req, res, next){
    categories.add(req.mp_collectdata, added);
    function added(err, result){
        console.log('inside added');
        if(err) return next(err);
        if(!err && result){
            req.cdata={
                success:1,
                error: 0,
                data:result,
                message:"seller successfully added"
            };
            next();
        }
    }
    }
}*/

module.exports = cg;