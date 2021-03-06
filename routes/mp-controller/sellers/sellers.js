var util = require('util');
var proc = require('proc-utils');
var sanitize = require('google-caja').sanitize;
var models = require('../../../models').marketPlace;
var sm = models.seller;
var mw = require('../../middleware');

// var config = require("../../../config");

module.exports={
    collect: function collectfc(req, res,next){
        var reqdata = {};
        // console.log(required);
        var fields = ['user_id','contact_no','address_line1','address_line2'];
        fields.forEach(function (entry) {
            if (typeof req.body[entry] !== 'undefined' || '') {
                reqdata[entry] = sanitize(req.body[entry]);
            }
        });
        req.mp_collectdata = reqdata;
        console.log(reqdata);
        // console.log(JSON.stringify(req.nc_collectdata));
        next();
    },
    validate: function validatefn(req, res, next){
        var required = sm.required;
        required.forEach(function(entry){
            if(typeof req.body[entry]==='undefined' || ''){
                return next(new Error('required parameter missing'));
            }
        });
        next();
    },
    add: function addfn(req, res, next){
        sm.add(req.mp_collectdata, added);
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
}

