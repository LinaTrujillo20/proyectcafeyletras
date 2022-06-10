import { Link } from 'react-router-dom';
import './Header.css';
import Logo from './logo.svg';

function Header(){
    return(

<header>
<a href="index.html" class="m-logo"><img src={Logo}/></a>
        <div class="search">
            <div class="search_wrap">
                <div class="search_box">
                    <input type="text" class="input" placeholder="Buscar"/>
                    <div class="btn btn_common">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Link class="b-shop" to="./compras"><i class="fa-solid fa-cart-shopping"></i></Link>
            <input type="checkbox" id="menu-bar" hidden/>
            <label for="menu-bar"><i class="fa-solid fa-bars"></i></label>
        <nav class="m-navbar">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/catalogo">Catalogo +</Link>
                    <ul>
                        <li><Link  href="/pages/ninios.html">Ninos</Link ></li>
                        <li><Link  href="/pages/adultos.html">Adultos</Link ></li>
                        <li><Link  to="/hogar">Hogar</Link ></li>
                    </ul>
                </li>
                <li><a href="./pages/reservas.html">Reservas</a></li>
                <li><a href="./pages/actividades.html">Actividades</a></li>
            </ul>
        </nav>
    </div>
</header>
);
}
export default Header;