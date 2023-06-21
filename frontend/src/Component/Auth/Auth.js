import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import React, { useState } from "react";
import {GoogleLogin} from 'react-google-login';
import Input from "./Inputs";
import './styles.css';
import GoogleIcon from '@mui/icons-material/Google';
import  {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { signin, signup } from "../../actions/auth";


const initalState = {firstname:'',lastname:'',email:'',password:'',confirmPassword:''}


const Auth = () => {

    const state = null;

    const [showPassword,setShowPassword] = useState(false);
    const [formData,setFormData]  = useState(initalState);
    const [isSignup,setisSignup] = useState(false);
    const history = useNavigate();
    const dispatch = useDispatch();

    const handleShowPassword = ( ) => setShowPassword((prevshowPassword) => !prevshowPassword);

    const handleSubmit = (e) => {
     
      e.preventDefault();
      if(isSignup){
         
        dispatch(signup(formData,history));
         
      }else{

        dispatch(signin(formData,history));
      }       
 

    }

    const handleChange = (e) => {
       
      setFormData({ ...formData,[e.target.name] : e.target.value})
        
    }

    const switchMode = () => {

      setisSignup((prevIsSignup) => !prevIsSignup);
      handleShowPassword(false);
    }

    const googleSuccess = async(res) => {

      console.log(res);
    }

    const googleFailure = (error) => {

      console.log(error);
      console.log("Google Sign in was unsuccessfull. Try Again later");

    }

    return(
      <Container component="main" width="xs">
        <Paper className="paper" elevation={3}>
         <Avatar className="avatar">
           <LockIcon/>
         </Avatar>
         <Typography variant="h5">{ isSignup ? 'Sign up' : 'Sign in'}</Typography>
         <form  className="form" onSubmit={handleSubmit}>

          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                
                <Input name="firstName" label="First Name"  handleChange={handleChange} autoFocus half /> 
                <Input name="lastName" label="Last Name"  handleChange={handleChange} half /> 
                
                </>
              )
            }
            <Input name="email" label = "Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label = "Password"  handleChange={handleChange} type= {showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label=" Repeat Password" handleChange={handleChange} type="password"/>}
          </Grid>

          <Button sx={{marginTop:'20px',paddingTop:'10px'}} type="submit" fullWidth variant="contained" color="primary" className="submit">
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin 
           
           
           clientId="5299265108-3mv8e0r952mq2b0h6kal286v469mhj2e.apps.googleusercontent.com"
           
           render={(renderProps) => (

            <Button className="googleButton" sx={{marginTop:'20px'}} color="primary"  fullWidth onClick={renderProps.onClick} 
            disabled={renderProps.disabled} startIcon = {<GoogleIcon/>} variant="contained">Google Sign in</Button>
             )}

             onSuccess={googleSuccess}
             onFailure={googleFailure}
             cookiePolicy = 'single_host_origin'
          />

          <Grid container justifyItems= "center">
           <Grid item>
             <Button onClick={switchMode} className="Switch" xs={4} >
              { isSignup ? 'Already Have an account? Sign In' : "Don't Have an account? Sign Up"}
             </Button>
           </Grid>
          </Grid>

         </form>
        </Paper>
      </Container>

    )

}


export default Auth;