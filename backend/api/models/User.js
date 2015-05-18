var bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    username: {
      type:     'string',
      required: true,
      unique:   true
    },
    email: {
      type:     'email',
      required: true,
      unique:   true
    },
    password: {
      type:      'string',
      minLength: 6,
      required:  true
    },
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(13, function(err, salt) { // rounds=13: ~1 sec/hash
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          user.password = hash;
          cb();
        }
      });
    });
  }
};