import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from "../src/components/login/Login";
import Usuario from "../src/pages/Usuario";
import { BrowserRouter, Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/usuario' element={<Usuario/>}></Route>
    </Routes>
  </BrowserRouter>
 
  
 
);