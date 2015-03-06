var util = require('util');
var proc = require('proc-utils');
var sanitize = require('google-caja').sanitize;
var models = require('../../../models').marketPlace;
var sm = models.seller;
var stm = models.stock;
var mw = require('../../middleware');

// var config = require("../../../config");

module.exports={
    collect: function collectfc(req, res,next){
        var reqdata = {};
        // console.log(required);
        var fields = ['seller_id','product_id','refilled_stock','price_per_unit'];
        fields.forEach(function (entry) {
            if (typeof req.body[entry] !== 'undefined' || '') {
                reqdata[entry] = sanitize(req.body[entry]);
            }
        });
        req.mp_collectdata = reqdata;
        req.mp_collectdata.rem_stock=reqdata.refilled_stock;
        console.log(reqdata);
        // console.log(JSON.stringify(req.nc_collectdata));
        next();
    },
    validate: function validatefn(req, res, next){
        var required = stm.required;
        required.forEach(function(entry){
            if(typeof req.body[entry]==='undefined' || ''){
                return next(new Error('required parameter missing'));
            }
        });
        next();
    },
    add: function addfn(req, res, next){
        console.log('inside add');
        stm.add(req.mp_collectdata, added);
        function added(err, result){
            if(err) return next(err);
            res.json(result);
            if(!err && result){
                req.cdata={
                    success:1,
                    error: 0,
                    data:result,
                    message:"stock successfully added"
                };
                next();
            }
        }
    }
}

