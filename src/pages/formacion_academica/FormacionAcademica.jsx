import React from 'react'
import estudio from '../../utils/images/Estudios.png'
import '../../utils/css/formacion_estilos.css'
import { Menu, Footer} from '../../components/export'

const Formacion = () => { //Pagina de formacion academica 
    return(
        <>
        <Menu />
        <div className="Form">
            <div className="titulofo">
                Informacion personal
            </div>

            <div className="contenedor_fo">
                <div className="contenedor_fo1"> 
                    <div> Principal: </div>
                    <div>Bachillerato, Colegio Rafael Uribe Uribe, Bogotá D.C,</div>
                    <div>Noviembre-2020.</div>
                    <div>Complementaria: </div>
                    <div>Curso de Fortalecimiento de habilidades laborales con enfoque en Operación de computadores Servicios hoteleros y servicio al Cliente. (2020)</div> 
                    <div>en la fundación Citi, Kuepa y Global Fairness Initiative.</div> 
                    <div>Formación como Gestor en el programa Convivencia Estudiantil para la Competitividad “Hermes”. (2017)</div>
                    <div>en la Cámara de Comercio de Bogotá. </div>
                </div>

                <div className="contenedor_fo2">
                    <img src={estudio} alt="es" />
                </div>
            </div>
        
            <Footer />
        </div>
        </>
    )
}
export default Formacion; 