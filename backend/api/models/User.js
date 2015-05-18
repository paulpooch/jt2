var bcrypt = require('bcrypt');

// TODO: validations: https://github.com/balderdashy/waterline#validations
module.exports = {

  tableName: 'users',

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

  /**
   * Lifecycle Callbacks
   *
   * Run before and after various stages:
   *
   * beforeValidate
   * afterValidate
   * beforeUpdate
   * afterUpdate
   * beforeCreate
   * afterCreate
   * beforeDestroy
   * afterDestroy
   */
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
