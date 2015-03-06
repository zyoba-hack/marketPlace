var user = require('./user');
var mw = require('../middleware');
module.exports = function (app) {

  app.get('/login', user.collect, user.validate, user.render, mw.error);

}