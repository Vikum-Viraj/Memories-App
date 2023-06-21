import React from "react";
import './styles.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Accordion, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost ,likePost } from "../../../api";

const Post = ({ post,setCurrentId }) => {

   const dispatch = useDispatch();
    
    return(

       <Card className="card"  sx ={{borderRadius:'25px'}}   >
        <CardMedia className="media" image={post.selectedFile} title={post.title}   />

        <div className="overlay">
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>

        <div className="overlay2">
            <Button style={{color:'white'}} size="small" onClick={() => setCurrentId(post._id)}>
             <MoreHorizIcon fontSize="large" />
            </Button>
        </div>

        <div className="details">
        <Typography variant="body2" color="textSecondary" component="h2" >{post.tags.map((tag) =>  `#${tag} `)}</Typography>
        </div>

        <Typography className="title" gutterBottom variant="h5" component="h2">{post.title}</Typography>
        
        <CardContent>
        <Typography className="title" variant="body2" color="textSecondary" component="p" >{post.message}</Typography>
        </CardContent>

        <CardActions className="cardActions">

         <Button size ="small" color="primary"  onClick={() => dispatch(likePost(post._id))} >
            <ThumbUpIcon fontsize="small"/>
            &nbsp; Like &nbsp;
            {post.likeCount}
         </Button>

         <Button size ="small" color="primary"  onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontsize="small"/>
             Delete
         </Button>

        </CardActions>

       </Card>


    );

}


export default Post;