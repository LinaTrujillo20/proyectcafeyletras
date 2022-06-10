import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from './logofooter.svg';

function Footer() {
    return (

        <footer className="footer">
            <div className="foot1">
                <img src={Logo} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis vitae illo fuga beatae ipsa quisquam dolor voluptates perspiciatis.</p>
            </div>

            <div className="foot2">
                <h4>Acerca de Café y Letras</h4>
                <Link to="">Sobre Nosotros</Link>
                <Link to="">Preguntas frecuentes</Link>
            </div>

            <div className="foot3">
                <h4>Síguenos</h4>
                <i className="fa-brands fa-instagram socialnet"></i>
                <i className="fa-brands fa-facebook socialnet"></i>
                <i className="fa-brands fa-twitter socialnet"></i>
            </div>

            <div className="foot4">
                <h4>Contáctanos</h4>
                <p><i className="fa-brands fa-whatsapp"></i>  +57 3000000000</p>
                <p><i className="fa-solid fa-envelope"></i>  info@cafeyletras.com</p>
                <p><i className="fa-solid fa-location-dot"></i>  Calle 15 #45a-08</p>
            </div>
        </footer>
    );
}
export default Footer;