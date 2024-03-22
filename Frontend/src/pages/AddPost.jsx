import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddPost = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const navigate = useNavigate();

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleSave = async () => {
    if (imageUrl === "" && textAreaValue === "") return;

    try {
      const newPost = {
        image: imageUrl,
        description: textAreaValue,
      };

       await axios.post(
        "http://localhost:5000/api/posts/add_post",
        newPost
      );

     
    } catch (error) {
      console.log(error);
    }
    setImageUrl('');
    setTextAreaValue('');
    navigate('/');
    
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <div style={{ padding: "20px", width: "700px" }}>
        <Typography variant="h4" gutterBottom>
          Image and Text Editor
        </Typography>
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
        {imageUrl && (
          <Box mt={2}>
            <img
              src={imageUrl}
              alt="Preview"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
            />
          </Box>
        )}
        <Box mt={2}>
          <Typography variant="h6">Content (Max 500 words):</Typography>
          <textarea
            value={textAreaValue}
            onChange={handleTextAreaChange}
            rows={10}
            style={{ width: "100%", maxWidth: "100%", resize: "vertical" }}
            maxLength={500}
          />
          <Typography
            variant="subtitle2"
            align="right"
            color={textAreaValue.length > 500 ? "error" : "inherit"}
          >
            {textAreaValue.length}/500 words
          </Typography>
        </Box>
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            SAVE
          </Button>
        </Box>
      </div>
     
    </Box>
  );
};

export default AddPost;
