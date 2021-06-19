import React from 'react'
import xd from '../../utils/images/Perfilprofesional.png'
import '../../utils/css/perfil_estilos.css'
import '../../utils/css/informacion_estilos.css'
import { Menu, Footer} from '../../components/export'

const Perfil = () => {// Pagina de perfil profesional 
    return(
        <>

        <Menu />
        <div className="container_perfil"> 
            <div className="titulopf">
                Perfil Profesional 
            </div>

            <div className="contenedor_pf">
                    <div className="contenedor_pf1">
                    Desarrolladora Front-End, con conocimientos en Html, en Css y en Java Script. Cuento con habilidades como el liderazgo, el trabajo en equipo, y una buena gestión de tiempo la cual también me atribuye la productividad personal, también soy una persona responsable y disciplinada que está dispuesta a aprender para poder fortalecer el crecimiento personal. 
                    </div>

                    <div className="contenedor_pf2">
                        <img src={xd} alt="xd" />
                    </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Perfil;