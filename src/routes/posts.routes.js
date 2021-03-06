const { Router } = require("express");
const router = Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { isAuthenticated } = require("../helpers/isAuthenticated");

const {
  renderIndexPage,
  showPost,
  renderListPosts,
  renderFormNewPost,
  createPost,

  renderEditPost,
  updatePost,
  deletePost,
} = require("../controllers/PostsController");

//Index posts
router.get("/", renderIndexPage);

//listar posts no adm

router.get("/list-posts", renderListPosts);

//formulário de cadastro de post
router.get("/new-post", isAuthenticated, renderFormNewPost);

//cadastrar
router.post(
  "/create-post",
  upload.array("images", 4),
  isAuthenticated,
  createPost
);

//show page post
router.get("/post/:slug/:id", showPost);

//form edit
router.get("/post/:id", renderEditPost);

//update
router.put("/post/:id", upload.array("images", 4), updatePost);

//delete
router.delete("/post/:id", deletePost);

module.exports = router;
