const PostController = {};
const PostModel = require("../models/Posts");
const Categoria = require("../models/Categoria");

const cloudinary = require("../config/cloudinary.config");

//renderiza pg principal lista dos posts
PostController.renderIndexPage = async (req, res) => {
  const allPosts = await PostModel.find({}).sort({
    createdAt: "desc",
  });
  res.render("posts/posts", { allPosts });
};

//pagina post completo
PostController.showPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id)
    .populate("categoria")
    .populate("author")
    .sort({ createdAt: "desc" });
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
PostController.renderFormNewPost = async (req, res) => {
  const categorias = await Categoria.find({});
  res.render("posts/new-post", { layout: "adm", categorias: categorias });
};

//new post
PostController.createPost = async (req, res, next) => {
  var erros = [];

  if (req.body.categoria == "0") {
    erros.push({ text: "Categoria inválida, registre uma categoria!" });
  }
  if (erros.length > 0) {
    res.render("posts/new-post");
  } else {
    req.body.images = [];

    for (const file of req.files) {
      let image = cloudinary.v2.uploader.upload(file.path);
      req.body.images.push({
        url: (await image).secure_url,
        public_id: (await image).public_id,
      });
    }

    const author = req.user._id;

    const { title, description, content, images, categoria } = req.body;

    const newPost = new PostModel({
      title: title,
      description: description,
      content: content,
      images: images,
      categoria: categoria,
      author: author,
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
  }
};

//formulário editar post
PostController.renderEditPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  res.render("posts/edit-post", { post, layout: "adm" });
};

PostController.updatePost = async (req, res) => {
  //find the post by id
  const post = await PostModel.findById(req.params.id);

  //check if there's any images for deletion
  if (req.body.deleteImages && req.body.deleteImages.length) {
    //assign deleteImages from req.body to its own variable
    const deleteImages = req.body.deleteImages;
    //loop over deleteImages
    for (const public_id of deleteImages) {
      //delete images from cloudnary
      await cloudinary.v2.uploader.destroy(public_id);
      //delete image from post.images
      for (const image of post.images) {
        if (image.public_id === public_id) {
          const index = post.images.indexOf(image);
          post.images.splice(index, 1);
        }
      }
    }
  }
  //check if there are any new images for upload
  if (req.files) {
    //upload images
    for (const file of req.files) {
      let image = cloudinary.v2.uploader.upload(file.path);
      //add images to post.images array
      post.images.push({
        url: (await image).secure_url,
        public_id: (await image).public_id,
      });
    }
  }
  //update the post with new any new porperties
  post.title = req.body.title;
  post.description = req.body.description;
  post.content = req.body.content;
  post.slug = req.body.slug;
  // const { title, description, content } = req.body;

  //save the updated post into the db
  post
    .save()
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
  const post = await PostModel.findById(req.params.id);
  for (const image of post.images) {
    await cloudinary.v2.uploader.destroy(image.public_id);
  }

  post
    .remove()
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
