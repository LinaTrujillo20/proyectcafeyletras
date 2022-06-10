import React from 'react';
import './Navbar.css';
import Logo from './logotipo.svg';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        /*caracteristicas del componente*/
        <div id="d-header-one">
            <div className="d-header-one-nav">
                <img src={Logo} />
                <a href="./pages/login.html"><i className="fa-solid fa-user"></i></a>
                <a className="b-shop" href="./pages/compras.html"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div id="d-header-second">
                <div className="d-header-second-nav">
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/catalogo">Catalogo</Link>
                            <ul>
                                <li><Link to="">Ninos</Link></li>
                                <li><Link to="">Adultos</Link></li>
                                <li><Link to="">Hogar</Link></li>
                            </ul>
                        </li>
                        <li><Link to="">Reservas</Link></li>
                        <li><Link to="">Actividades</Link></li>
                    </ul>
                </div>
                <div className="search2">
                    <div className="search_wrap2">
                        <div className="search_box2">
                            <input type="text" className="input" placeholder="Buscar" />
                            <div className="btn btn_common2">
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;