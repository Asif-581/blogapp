import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import axios from 'axios';

const PostCard = ({ id, image, description,getAllPost}) => {
  
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
  };
  
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/posts/${id}`);
      
    } catch (error) {
      console.log(error);
    }
    handleClose();
    getAllPost();
    
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`post/${id}`} style={{ textDecoration: "none" }}>
        <CardMedia sx={{ height: 200 }} image={image} />
      </Link>
      <CardContent sx={{ padding: "16px" }}>
        <Typography variant="body2" color="text.secondary">
          {description.slice(0, 250)}...
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
        <Link to={`editPost/${id}`}>
          <Button variant="outlined" color='info' size="small" onClick={() => {
            
          }}>
            Edit
          </Button>
        </Link>

        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={handleClickOpen}
        >
          Delete
        </Button>
      </CardActions>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this post?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleDelete(id)}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default PostCard