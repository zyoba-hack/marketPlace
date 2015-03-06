'use strict';

var util = require('util');
var debug = require('debug')('user');
var db = require('../db');
var common = require('../common'); 

var bm = {
    table: db.define({
        name: 'product',
        columns: ['id', 'name','description','quantity','product_id','category','price','is_deleted','updated_at','created_at']
    }),

    fetch: function (filters, selectFields, cb) {
        if (typeof selectFields === 'function') {
            cb = selectFields;
            selectFields = null;
        }

        var table = this.table;
        var query = table.select(selectFields || table.columns);

        if (filters) {
            common.generateWhereClause(table, query, filters);
        }
        debug(query.toQuery());
        query.exec(cb);
    },

    add: function add(data, cb) {
        data.created_at = common.currentDate();
        delete data.updated_at;
        delete data.id;

        var table = this.table;
        var query = table.insert(data);
        debug(query.toQuery());
        query.exec(respond);

        function respond(err, res) {
            if (!err && res) {
                data.id = res.insertId;
                cb(null, data.id);
            } else {
                cb(err || new Error('unable to add new record'));
            }
        }
    },
    save: function save(data, cb) {
            var keys = {};
            if (data.id) keys.id = data.id;
            if (!Object.keys(keys).length) {
                return cb(new Error('keys not found'));
            }

            data.updated_at = common.currentDate();

            var table = this.table;
            var query = table.update(data);
            common.generateWhereClause(table, query, keys);
            debug(query.toQuery());
            query.exec(respond);

            function respond(err, res) {
                if (!err && res) {
                    cb(null, data);
                } else {
                    cb(err || new Error('unable to update record: ' + JSON.stringify(
                        keys)));
            }
        }
    },

    all: function (cb) {
        this.fetch(null, cb);
    }
};

module.exports = bm;

//-- Test Code ----------------------------------------------------------
if (require.main === module) {
    (function () {
        console.log(require.main);
        // test code
        bm.all(function (error, data) {
            console.log(error);
            console.log(data);
        });
    })();
}