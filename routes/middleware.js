'use strict';

var util = require('util');

var mw = {
    validate: function validatefn(req, res, next) {
        var err;
        if (!req.reqdata) {
            err = new Error('missing required params');
            err.status = 404;
        } else if ('lkasjdfkdlahflkhdafhhewbfhaskdhlakshd' !== req.reqdata.key) {
            err = new Error('Unauthorized access with key: ' + req.reqdata.key);
            err.status = 404;
        }

        next(err);
    },

    respond: function respondfn(req, res, next) {
        res.json(req.cdata);
    },

    error: function errorfn(err, req, res, next) {
        // console.log('why here');
        if (!err) {
            err = new Error('an error has occurred');
        }

        var code = err.status || 500;

        util.log(util.format('Error [%s]: %s', req.url, err.message));

        if (code !== 404 && code !== 403) {
            // not logging traces for 404 and 403 errors
            util.log(util.inspect(err.stack));
        }

        if ('ETIMEDOUT' === err.code || 'ENOTFOUND' === err.code) {
            err.message =
                'Error connecting upstream servers, please try again later.';
        }

        if ('POST' === req.method) {
            if (err.status === 403) {
                err.message =
                    'Session expired, please refresh the page to continue.';
            }
        }

        res.json({
            result: 'failure',
            success: 0,
            error: 1,
            error_msg: err.message,
            statusCode: code
        });
    }
};

module.exports = mw;
