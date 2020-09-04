const { Router } = require("express");
const router = Router();

const { isAuthenticated } = require("../helpers/authenticate");

const {
  renderIndexPage,
  renderListPosts,
  renderFormNewPost,
  newPost,
} = require("../controllers/PostsController");

//Index posts
router.get("/", renderIndexPage);

//listar posts no adm

router.get("/list-posts", renderListPosts);

//formulário de cadastro de post
router.get("/new-post", isAuthenticated, renderFormNewPost);

//cadastrar
router.post("/create-post", isAuthenticated, newPost);

//show
router.get("/post/:id", (req, res) => {});

//form edit
router.get("/post/:id/edit", (req, res) => {});

//update
router.put("/post/:id", (req, res) => {});

//delete
router.delete("/post/:id", (req, res) => {});

module.exports = router;
