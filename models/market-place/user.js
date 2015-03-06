'use strict';

var util = require('util');
var debug = require('debug')('user');
var db = require('../db');
var common = require('../common');

var bm = {
    table: db.define({
        name: 'user',
        columns: ['id', 'username', 'password', 'type', 'phone_no', 'created_at', 'updated_at', 'is_deleted']
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

    all: function (cb) {
        this.fetch(null, cb);
    },
    getPasswordByUser: function getPasswordByUser(id, cd) {

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