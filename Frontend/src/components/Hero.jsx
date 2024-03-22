import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Hero = () => {
  const [posts, setPosts] = useState([]);
   const [openDialog, setOpenDialog] = useState(false);

  

   const handleOpenDialog = () => {
     setOpenDialog(true);
  };
  
  

   const getAllPost = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <>
     
      <div className="hero">
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "50px" }}
        >
          <Link to="createPost">
            <Button variant="outlined"  onClick={handleOpenDialog}>Create Post</Button>
          </Link>
        </Box>

        <Box
          display="flex"
          gap="20px"
          justifyContent="flex-start"
          flexWrap="wrap"
        >
          {posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                {...post}
                getAllPost={getAllPost}
                handleOpenDialog={handleOpenDialog}
              />
            );
          })}
        </Box>
      </div>
    </>
  );
};

export default Hero;

