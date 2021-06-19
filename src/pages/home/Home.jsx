import React from 'react'
import gerald from '../../utils/images/gerald.jfif'
import { Menu, Footer} from '../../components/export'
import '../../utils/css/home_estilos.css'

const Home = () => {
    return( //Inicio de la pagina o Home
        <>
        < Menu />
        <div className="ContenedorHome " id="contenedorhome">
            <div className="PreseNom" id="contenedortitulos">
                <div className=" presentacion" id="presentacion">
                    <h1> Presentacion personal </h1>
                </div>

                <div className="nombre" id="nombre">
                    <h1> Geraldine Molina Avila </h1>
                </div>
            </div>

            <div className="contenedorho" id="contenedorgerald">

                <div className="geraldxd">
                    <img src={gerald} alt="es" />
                </div>
            </div>
            
        </div>

        <Footer />
        </>

    )
}
export default Home; 