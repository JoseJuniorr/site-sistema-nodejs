const AdmController = {};

const Users = require("../models/User");

AdmController.renderListUsers = async (req, res) => {
  const users = await Users.find({});

  res.render("adm/list-users", { layout: "adm", users });
};

module.exports = AdmController;
