const PostController = {};

const PostModel = require("../models/Posts");

//renderiza pg principal dos posts
PostController.renderIndexPage = (req, res) => {
  res.render("posts/posts");
};

//renderiza form para cadastro no adm
PostController.renderFormNewPost = (req, res) => {
  res.render("posts/new-post", { layout: "adm" });
};

//rota salvar post no bd
PostController.newPost = async (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);

  const newPost = new PostModel({
    title: title,
    description: description,
  });

  await newPost
    .save()
    .then(() => {
      req.flash("success_msg", "Post cadastrado com sucesso!");
      res.redirect("/posts/new-post");
    })
    .catch((err) => {
      req.flash("error_msg", "Erro ao salvar a postagem!");
    });
};

module.exports = PostController;
