var categories = require('../../models/market-place/categories');
var cg = {
	getList : function(req, res, next) {
		categories.fetch({}, null, cb);
		function cb(err, datas) {
			if(err)
				console.log(err);
			else
				res.send(datas);
		}
	}
}

module.exports = cg;