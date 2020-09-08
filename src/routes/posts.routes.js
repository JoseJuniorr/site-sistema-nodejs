const { Router } = require("express");
const router = Router();

const multer = require("multer");
const upload = multer({ dest: "src/uploads" });
const { errorHandler } = require("../middleware/errorHandler");

const { isAuthenticated } = require("../helpers/authenticate");

const {
  renderIndexPage,
  showPost,
  renderListPosts,
  renderFormNewPost,
  newPost,
  editPost,
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
  newPost
);

//show page post
router.get("/post/:id", showPost);

//form edit
router.get("/post/:id/edit", renderEditPost);

//update
router.put("/post/:id", updatePost);

//delete
router.delete("/post/:id", deletePost);

module.exports = router;
