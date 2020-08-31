const authenticate = {};

authenticate.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash("error_msg", "É necessário realizar o login!");
    res.redirect("/users/login");
  }
};

module.exports = authenticate;
