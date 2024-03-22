import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
    const [textAreaValue, setTextAreaValue] = useState("");
    

const editPost = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/posts/${id}`);
    const data = await response.json();
      setImageUrl(data.image);
      setTextAreaValue(data.description);
  } catch (error) {
    console.error("Error fetching single post:", error);
  }
};
    useEffect(() => {
     
        editPost();
      
    }, [])
    
    
    
    
    
  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

    const handleUpdate = async() => {
      if (imageUrl === "" && textAreaValue === "") return;
      try {
        const editedPost = {
          image: imageUrl,
          description: textAreaValue,
        };

        await axios.put(`http://localhost:5000/api/posts/${id}`, editedPost);
      } catch (error) {
        console.log(error);
      }
          setImageUrl("");
          setTextAreaValue("");
        navigate('/');
    }
    
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap:'50px',
        marginTop: "50px",
        width: "100%",
      }}
    >
      <div style={{ padding: "20px", width: "600px" }}>
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
              style={{ width: "100%", maxHeight: "500px" }}
            />
          </Box>
        )}
      </div>
      <Box sx={{ width: "500px",padding:'20px' }}>
        <Typography variant="h4">Description (Max 500 words):</Typography>
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
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            SAVE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditPost;
