const Post = require("../models/post");

exports.getAllPosts = async (req, res) => {
  try {
    const response = await Post.findAll();
    return res.status(200).send(response);
  }
  catch (error) {
   console.error("Error fetching posts:", error);
   return res.status(500).json({ error: "Internal server error" });
  }
  
};


exports.getSinglePost = async (req, res) => {
  const  postId  = req.params.id;
  const response = await Post.findOne({where: {id:postId}});
  return res.status(200).json(response);
};

exports.deletePost = async (req,res) => {
  const postId = req.params.id;
    try {
      const records = await Post.destroy({ where: { id: postId } });
      res.status(200).json(records);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
};

exports.addPost = async (req,res) => {
  const { image, description } = req.body;
    try {

      const records = await Post.create({ image, description });
      res.status(201).json(records);
    } catch (error) {
      console.error("Error handling POST request:", error);
      res.status(500).json({ error: "Internal server error" });
    }
}



exports.updatePost = async (req, res) => {
  const postId = req.params.id;
  const { image, description } = req.body;
  try {
    const response = await Post.update(
      { image, description },
      { where: { id: postId }, returning: true }
    );
    res.status(200).send(response);

  } catch (error) {
    console.error("Error handling POST request:", error);
    res.status(500).json({ error: "Internal server error" });
  }

}