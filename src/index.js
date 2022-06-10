import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from "../src/components/login/Login";
import Usuario from "../src/pages/Usuario";
import Home from "../src/pages/Home";
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/proyectcafeyletras' element={<Home/>}></Route>
        <Route path='/home' element={<Navigate replace to={"/proyectcafeyletras"}/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/usuario' element={<Usuario/>}></Route>
    </Routes>
  </BrowserRouter>
 
  
 
);