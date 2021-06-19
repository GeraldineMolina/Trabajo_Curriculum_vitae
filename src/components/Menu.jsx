import React from 'react' //Se importan 
import '../utils/css/menu_estilos.css'
import {Link} from "react-router-dom"


function Menu(){ //Componente para el menu 
    return(
        <>
            <div className="Menu">
                <nav className="menu2">
                    <div className="links"> <Link to="/"> <li> Home</li> </Link></div>
                    <div className="links"><Link to="/perfil"> <li> Perfil Profesional </li></Link></div>
                    <div className="links"><Link to="/informacion" > <li> Informacion Personal </li> </Link> </div>
                    <div className="links"><Link to="/formacion"> <li> Estudios </li> </Link> </div>
                </nav>
            
            </div>

        </>
    )
}

 

export default Menu;