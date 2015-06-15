var passport = require('passport');

module.exports = {

  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  login: function(req, res) {
    // http://passportjs.org/docs/authenticate
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        return res.serverError({
          error: err,
          user: user
        });
      }
      if (!user) {
        return res.serverError({
          error: info.message,
          user: user
        });
      }
      req.logIn(user, function(err) {
        if (err) {
          return res.serverError({
            error: err,
            user: user
          });
        }
        return res.send({
          message: info.message,
          user: user
        });
      });
    })(req, res);
  },

  logout: function(req, res) {
    req.logout();
    req.session.destroy(function (err) {
      return res.send({
        message: 'Logout successful.'
      });
    });
  },

  signup: function(req, res) {
    var email = req.body.inputEmail;
    var password = req.body.inputPassword;
    var username = email.split('@')[0];
    var attrs = {
      email: email,
      password: password,
      username: username
    };
    User.create(attrs)
    .then(function(user) {
      return res.json({
        user: user
      });
    })
    .catch(function(err) {
      return res.serverError({
        error: err
      });
    });
  }

};
