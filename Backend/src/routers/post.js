const express = require("express");
const router = express.Router();
const post = require("../models/post");
const {
  getAllPosts,
  getSinglePost,
  addPost,
  deletePost,
  updatePost
} = require("../controllers/post");


router.get("/", getAllPosts);

router.get("/:id", getSinglePost);

router.delete("/:id", deletePost);

router.post("/add_post", addPost);

router.put("/:id", updatePost);

module.exports = router;