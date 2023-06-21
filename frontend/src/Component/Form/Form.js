import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
import BuildMin from "react-file-base64";
import FileBase from 'react-file-base64';
import { useDispatch,useSelector } from "react-redux";
import { createPost,updatePost } from "../../actions/posts";

import './styles.css'


//Get the Current id


const Form = ({currentId,setCurrentId}) => {

    const [PostData,setPostData] = useState({

        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    });

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId):null);

    const dispatch = useDispatch();


    useEffect(() => {

      if(post) setPostData(post);
      
    },[post])


    const handleSubmit = (e) => {

        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId,PostData))
        }
        else{
            dispatch(createPost(PostData));
        }

        clear();
    }



    const clear = () => {

        setCurrentId(null);

        setPostData({ creator:'',title:'', message:'',tags:'',selectedFile:'' });

    }





    return(
        
        <div className="Frm">
        <Paper className="paper">
            <form autoComplete="off" noValidate className= "form"  onSubmit={handleSubmit} >
            <Typography variant="h5" >{currentId ? 'Editing' : 'Creating' } a  Memory</Typography>

            <TextField name="creator" variant="outlined" label = "Creator"  sx={{margin:'6px',width:'210px',height:'50px'}}
            value={PostData.creator} onChange={(e) => setPostData({...PostData,creator:e.target.value})} fullWidth/>

             <TextField name="title" variant="outlined" label = "Title"  sx={{margin:'6px',width:'210px',height:'50px'}}
            value={PostData.title} onChange={(e) => setPostData({...PostData,title:e.target.value})} fullWidth/>

             <TextField name="message" variant="outlined" label = "Message"  sx={{margin:'6px',width:'210px',height:'50px'}}
            value={PostData.message} onChange={(e) => setPostData({...PostData,message:e.target.value})} fullWidth/>

             <TextField name="tags" variant="outlined" label = "Tags"  sx={{margin:'6px',width:'210px',height:'50px' }}
            value={PostData.tags} onChange={(e) => setPostData({...PostData,tags:e.target.value.split(',')})} fullWidth/>

            <div className="fileInput">
            <FileBase  type = "file" multiple={false} onDone={({base64}) => setPostData({ ...PostData,selectedFile: base64})}/>
            </div>

            <Button   sx={{margin:'2px',width:'230px'}}  className="buttonSubmit" variant="contained" color="primary" type ="submit" size="small" fullWidth>Submit</Button>
            <Button    sx={{margin:'2px',width:'230px'}}    className="" variant="contained" color="secondary" onClick={clear} size="small" fullWidth>Clear</Button>
            </form>
        </Paper>
        </div>
    )


}


export default Form;