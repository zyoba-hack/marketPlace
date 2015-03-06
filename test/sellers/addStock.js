'use strict';

var util = require('util');
var makeApiCall = require('proc-utils').makeApiCall;

var baseUrl = 'http://localhost:' + (require('../../config').port || 3000);

var url = {
    endpoint: '/api/seller/stock',
    method: 'post'
};

var ct = {
    test: function (data, cb) {
        var options = {
            type: 'form',
            data: data,
            baseUrl: baseUrl
        };
        makeApiCall(url.endpoint, url.method, options, cb);
    }
};

module.exports = ct;

//-- Test Code ----------------------------------------------------------
if (require.main === module) {
    (function () {
        var data = {
            'seller_id':'1',
            'product_id':'1',
            'refilled_stock':'78',
            'price_per_unit':'1'
        };

        ct.test(data, console.log);
    })();
}
