import React from "react";
import {  Route, Routes } from 'react-router-dom';
import LandingPage from "../components/LandingPage";
import Home from '../components/Home';
import CreateVG from '../components/CreateVG'
import About from "../components/About";
import Detail from "../components/Detail";
import NotFound from "../components/notFound";

    export  const AppRoutes=()=>{
  return (
  <>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/Home/:id' element={<Detail/>}/>
        <Route path='/create' element={<CreateVG/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
 </>  
    )
}
