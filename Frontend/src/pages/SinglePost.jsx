
import { Box } from '@mui/material';
import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom";

const SinglePost = () => {
    
    const { id } = useParams();

    const [singlepost, setSinglePost] = useState(null);

const getSinglePost = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}`);
        const data = await response.json();
      setSinglePost(data);
      
      
    } catch (error) {
      console.error("Error fetching single post:", error);
    }
  };

    useEffect(() => {
    getSinglePost(id);
  }, [id]);

    
  
  return (
    <Box
      sx={{
        width: "100%",

        display: "flex",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      <Box width="700px" display="flex" flexDirection="column" gap="50px">
        <img src={singlepost?.image} alt="img" width="100%" />

        <Box>{singlepost?.description}</Box>
      </Box>
    </Box>
  );
}

export default SinglePost
