var user = {

  collect: function collect(req, res, next) {
    return next();
  },

  validate: function validate(req, res, next) {
    return next();
  },

  render: function render(req, res, next) {
    res.render('index')

  }
}

module.exports = user;