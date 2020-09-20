const AdmController = {};

const User = require("../models/User");

//renderiza a lista de usuários
AdmController.renderListUsers = async (req, res) => {
  const users = await User.find({});

  res.render("adm/list-users", { layout: "adm", users });
};

//renderiza formulário para cadastro de users
AdmController.renderRegisterForm = (req, res) => {
  res.render("adm/register", { layout: "adm" });
};

//registro de usuário
AdmController.registerUsers = async (req, res) => {
  const errors = [];

  const { name, email, password, confirm_password } = req.body;

  if (password != confirm_password) {
    errors.push({ text: "As senhas não conferem! Tente Novamente!" });
  }
  if (password.length < 6) {
    errors.push({ text: "A senha deve ter no mínimo 6 caracteres!" });
  }

  if (errors.length > 0) {
    res.render("adm/register", {
      layout: "adm",
      errors,
      name,
      email,
    });
  } else {
    const emailExiste = await User.findOne({ email: email });

    if (emailExiste) {
      req.flash("error_msg", "Este email já está em uso!");
      res.redirect("/users/register");
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      var text = "Cadastro realizado {name}, sua senha é {password}!";
      text = text
        .replace("{name}", req.body.name)
        .replace("{password}", req.body.password);
      require("../mail")(
        req.body.email,
        "Cadastro realizado com sucesso!",
        text
      );
      req.flash("success_msg", "Usuário cadastrado com sucesso!");
      res.redirect("/users/list-users");
    }
  }
};

// ADM Edit pages
AdmController.listPages = (req, res) => {
  res.render("adm/list-pages", { layout: "adm" });
};

module.exports = AdmController;
