import React from "react";
import {  Container} from '@mui/material';
import './other.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';
import Home from "./Component/Home/Home";
import Auth from "./Component/Auth/Auth";


const App = () => {

 
    return(
        
      <BrowserRouter>
      <Container maxidth="lg">
         <NavBar/>
         <Routes>
          <Route  path="/" element={<Home/>} exact />
          <Route  path="/auth" element={<Auth/>} exact />
         </Routes>
        </Container>
      </BrowserRouter>

    );

}


export default App;
