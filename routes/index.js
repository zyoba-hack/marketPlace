module.exports = function (app) {
  require('./mp-controller')(app);
  require('./angular_controller')(app);
};