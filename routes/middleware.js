'use strict';

var util = require('util');


var mw = {
    respond: function respondfn(req, res, next) {
        res.json(req.cdata);
    },
    error: function errorfn(err, req, res, next) {
        if (!err) err = new Error('an error has occurred');
        var code = err.status || 500;

        util.log(util.format('Error [%s]: %s', req.url, err.message));
        if (code !== 404 && code !== 403) {
            // not logging traces for 404 and 403 errors
            util.log(util.inspect(err.stack));
        }

        if ('ETIMEDOUT' === err.code || 'ENOTFOUND' === err.code) {
            err.message = 'Error connecting upstream servers';
        }

        if ('POST' === req.method) {
            if (err.status === 403) {
                err.errorDetails = 'Session and/or token expired.';
            }
        }

        if (req.xhr || req.isapi) {
            res.json({
                result: 'failure',
                code: code || 1,
                success: 0,
                error: err.message,
                message: err.errorDetails || err.message
            });
        } else {
            mw.menu(req, res, function (e) {
                if (e) console.log(e);

                res.locals.error = err.message;
                res.status(code).render(req.errorview || 'error');
            });
        }
    }
};

module.exports = mw;
/*function baseUrl(url) {
    var parts = url.split('/');
    var returnUrl = parts.length < 3 ? url : [parts[0], parts[1], parts[2]].join('/');
    return returnUrl.split('.')[0];
}*/

//-- Test Code ----------------------------------------------------------
if (require.main === module) {
    (function () {})();
}