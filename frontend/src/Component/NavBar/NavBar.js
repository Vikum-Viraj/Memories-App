import { AppBar, Avatar, Button, Link, Toolbar, Typography } from '@mui/material'
import React,{useEffect,useState} from 'react'
import {useDispatch} from 'react-redux';
import './styles.css';

const NavBar = ()  => {

  const LogOut = () =>{


  }

  const[user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user);

  useEffect(() => {

    const token = user?.token;


    setUser(JSON.parse(localStorage.getItem('profile')));
  },[]);

   
 

    return(

        <AppBar className= "appBar" position="static" color ="inherit"  >
        <div className='brandContainer'>
        <Typography   component={Link} to = '/' className= "heading" variant="h2" align="center">Memories</Typography>
        </div>
        <Toolbar className='toolbar' >
          { user ? (
            <div className='profile'>
                <Avatar className='purple'alt= {user.result.name} src={user.result.imageUrl} >
                    {user.result.name.charAt(0)}
                </Avatar>
                <Typography className='userName' variant='h6'>{user.result.name}</Typography> 
                <Button variant='contained' className='logout' color='secondary' onClick={LogOut} >Log Out</Button>
            </div>
          ) : (
                
            <Button className='btn' component={Link} a href='/auth' variant='contained' color='primary' >Sign In</Button>
          )}
        </Toolbar>
        </AppBar>
    )

}

export default NavBar;
