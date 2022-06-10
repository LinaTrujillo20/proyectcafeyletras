import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import "../login/Login.css";
import Logo from "../login/logotipo.svg";
import Navbar from '../navbar/Navbar';
import Subfooter from '../subfooter/Subfooter';



function Login(){
    return(
        <>
        <Navbar/>
        <div className='wrapper'>
        
            <div className="title"><span> <img src={Logo}/></span></div>
            <form className="form" to="#"/>
                <h1>¡Bienvenido!</h1>
                <div className='row'>
                <i className='fa-solid fa-envelope'></i>
                <input type="text" placeholder="Correo o usuario"/>
                </div>

                <div className='row'>
                    <i className='fa-solid fa-lock'></i>
                    <input type="password" placeholder="Contraseña"/>
                </div>

                <div className='button'>
                    <button className="btn-verde"><Link to="/usuario">INGRESAR</Link></button>
                </div><br/><br/>

                <div className='pass'><Link to="#">¿Olvidaste tu usuario o contraseña? </Link></div>
            <form/>   
        </div>
        <Footer/>   
        <Subfooter/>
        </>
        

    );
}

export default Login;