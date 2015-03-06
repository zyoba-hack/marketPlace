var bcrypt = require('bcrypt');

bcryptObject = {
  encrypt: function encrypt(password, callback) {
    bcrypt.genSalt(10, function (err, salt) {
      if (!err)
        bcrypt.hash(password, salt, callback);
    });
  },

  compare: function compare(value, hash, cb) {

    bcrypt.compare(value, hash, cb);
  }
};


module.exports = bcryptObject;

//-- Test Code ----------------------------------------------------------
if (require.main === module) {
  (function () {

    bcryptObject.encrypt("Suresh", function (error, data) {
      console.log(data);
    });

    bcryptObject.compare('Suresh', "$2a$10$J.DVNdBHHNf/rlYI1/R4feRgHUFFXrlcLTW20e5EuB1XNqU5K7gTS", function (error, result) {
      console.log(result);
    })
  })();
}