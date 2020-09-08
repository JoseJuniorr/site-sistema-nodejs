const PostController = {};
const PostModel = require("../models/Posts");

// const cloudinary = require("cloudinary");
// cloudinary.config({
//   cloud_name: `${process.env.CLOUD_NAME}`,
//   api_key: `${process.env.API_KEY}`,
//   api_secret: process.env.CLOUDINARY_SECRET,
// });

//renderiza pg principal lista dos posts
PostController.renderIndexPage = async (req, res) => {
  const allPosts = await PostModel.find({}).sort({
    createdAt: "desc",
  });
  res.render("posts/posts", { allPosts });
};

//pagina post completo
PostController.showPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  res.render("posts/show", { post });
};

//lista de posts no adm
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

//new post
PostController.newPost = async (req, res) => {
  // req.body.newPost.images = [];

  // for (const file of req.files) {
  //   const image = await cloudinary.v2.uploader.upload(file.path);
  //   req.body.newPost.images.push({
  //     url: image.secure_url,
  //     public_id: image.public_id,
  //   });
  // }

  const { title, description, content } = req.body;
  // console.log(req.body);

  const newPost = new PostModel({
    title: title,
    description: description,
    content: content,
  });

  await newPost
    .save()
    .then(() => {
      req.flash("success_msg", "Post cadastrado com sucesso!");
      res.redirect("/posts/list-posts");
    })
    .catch((err) => {
      req.flash("error_msg", "Erro ao salvar a postagem!");
    });
};

//formulário editar post
PostController.renderEditPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  res.render("posts/edit-post", { post, layout: "adm" });
};

PostController.updatePost = async (req, res) => {
  const { title, description, content } = req.body;

  await PostModel.findByIdAndUpdate(req.params.id, {
    title,
    description,
    content,
  })
    .then(() => {
      req.flash("success_msg", "Post editado com sucesso!");
      res.redirect("/posts/list-posts");
    })
    .catch((err) => {
      req.flash("error_msg", "Erro ao editar a postagem!");
      res.redirect("/posts/list-posts");
    });
};

PostController.deletePost = async (req, res) => {
  await PostModel.findByIdAndDelete(req.params.id)
    .then(() => {
      req.flash("success_msg", "Post excluído com sucesso!");
      res.redirect("/posts/list-posts");
    })
    .catch((err) => {
      req.flash("error_msg", "Erro ao excluir a publicação!");
      res.redirect("/posts/list-posts");
    });
};
module.exports = PostController;
