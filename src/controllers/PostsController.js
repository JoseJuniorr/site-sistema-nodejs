const PostController = {};

const PostModel = require("../models/Posts");

//renderiza pg principal dos posts
PostController.renderIndexPage = async (req, res) => {
  const allPosts = await PostModel.find({}).sort({
    createdAt: "desc",
  });
  res.render("posts/posts", { allPosts });
};

PostController.renderListPosts = async (req, res) => {
  const posts = await PostModel.find({}).sort({
    createdAt: "desc",
  });
  res.render("posts/list-posts", { layout: "adm", posts });
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
