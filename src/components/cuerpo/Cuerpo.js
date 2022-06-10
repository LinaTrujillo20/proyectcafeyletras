import React from 'react';
import './Cuerpo.css';
import Imagen from "./usuariofoto.png";
const Cuerpo = () => {
  return (
    <body className='cuerpo'>
    <article className="card">
    <img src={Imagen} alt="perfil-img" className="card-img"/>
           <div className="card-body">
                <h2 className="card-text">Marcos Lopez</h2>
                <p >Me encanta perderme en las letras con mi buen café</p>
           </div>
   </article> 
   <div className="contenido">
   <div className="contenido-two">
        <div className="card_generos">
            <h3>TUS GÉNEROS FAVORITOS <i className="fa-solid fa-square-pen"></i></h3>
            <p>Aventura</p>
            <p>Terror</p>
            <p>Novela</p>
        </div>

        <div className="card_deseos">
            <h3>LISTA DE DESEOS <i className="fa-solid fa-heart"></i></h3>
            <p>El principito-Antoine de Saint <i className="fa-solid fa-angle-right"></i></p>
            <p>Callejón sin salida-Black Pierce <i className="fa-solid fa-angle-right"></i></p>
        </div>
   </div>
    
    <div className="pharase">
        <h3>TUS FRASES FAVORITAS <i classNameName="fa-solid fa-book-open" /></h3>
        <div className="card-pharases">
            <div className="card_pharase_one">
                <p>“Los lectores están en la libertad de formar su propio criterio en lo que a ética y valores se  refiere” A puro pulso.</p>
            </div>
            <div className="card_pharase_two">
                <p>“El unico deber que tenemos con la historia es volverla a escribir a puro pulso”</p>
            </div>
            <div className="card_pharase_three">
                <p>+</p>
            </div>
        </div>        
    </div>      
</div>
</body>
  );
}

export default Cuerpo;
