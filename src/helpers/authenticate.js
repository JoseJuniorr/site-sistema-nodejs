const authenticate = {};

authenticate.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash("error_msg", "Authentication required!");
    res.redirect("/users/login");
  }
};

module.exports = authenticate;
