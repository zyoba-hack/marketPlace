// var user = require('./user');
// var mw = require('../middleware');
// var cg = require('./categories');
// var buyers=require('./buyers');
// var sellers = require('./sellers');

module.exports = function (app) {
  require('./buyer')(app);
  require('./categories')(app);
  require('./sellers')(app);
  require('./product')(app);
}
