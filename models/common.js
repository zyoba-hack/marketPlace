'use strict';

var util = require('util');
var moment = require('moment');

var MYSQL_DATEFORMAT = 'YYYY-MM-DD HH:mm:ss';

/**
 * Common utility routines for model objects
 */
var common = {
    /**
     * Generates general where part of a query. Updates the query object.
     *
     * @param {Object} table the db table
     * @param {Object} query the db query object
     * @param {Object} keys the keys to form the where clause
     */
    generateWhereClause: function generateWhereClausefn(table, query, keys) {
        Object.keys(keys).forEach(function (x) {
            query.where(table[x].equals(keys[x]));
        });
    },

    currentDate: function currentDatefn(d) {
        if (!d) d = new Date();

        return moment(d).format(MYSQL_DATEFORMAT);
    }
};

/** @type {Object} the common module exported */
module.exports = common;

//-- Test Code ----------------------------------------------------------
if (require.main === module) {
    (function () {
        console.log(common.currentDate());
    })();
}
