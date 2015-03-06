'use strict';

var util = require('util');
var debug = require('debug')('user');
var db = require('../db');
var common = require('../common');

var bm = {
    table: db.define({
        name: 'stock',
        columns: ['id', 'seller_id', 'product_id' , 'rem_stock', 'refilled_stock','price_per_unit', 'created_at', 'updated_at', 'is_deleted']
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
        log(query);
        debug(query.toQuery());
        query.exec(cb);
    },

    all: function (cb) {
        this.fetch(null, cb);
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
