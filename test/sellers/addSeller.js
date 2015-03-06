'use strict';

var util = require('util');
var makeApiCall = require('proc-utils').makeApiCall;

var baseUrl = 'http://localhost:' + (require('../../config').port || 3000);

var url = {
    endpoint: '/api/seller',
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
            'user_id':'1',
            'contact_no':'123'
        };

        ct.test(data, console.log);
    })();
}
