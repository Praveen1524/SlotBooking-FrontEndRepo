import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Add from './pages/add';
import Booking from './pages/Booking';
import Form from './pages/form/form';
import Login from './pages/login';
import Delete from './pages/delete';
import Show from './pages/show';
import Update from './pages/update';


function Routing() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Booking" element={<Booking/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/PostForm" element={<Add/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/Create" element={<Login/>}/>
    <Route path="/Add" element={<Add/>}/>
    <Route path="/delete" element={<Delete/>}/>
    <Route path="/show" element={<Show/>}/>
    <Route path="/update" element={<Update/>}/>
    </Routes>
    </>
  )
}

export default Routing