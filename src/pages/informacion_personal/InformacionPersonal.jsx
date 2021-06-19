import React from 'react'
import infor from '../../utils/images/Informacionpersonal.png'
import '../../utils/css/informacion_estilos.css'
import { Menu, Footer} from '../../components/export'
import Popup from 'reactjs-popup';


const Informacion = () => {
    
    return( // Pagina de inforacion persnal 
        <>
        <Menu />
        <div className="Informacionper"> 
            <div className="tituloin">
                Informacion personal
            </div>

            <div className="contenedor_in">
                <div className="contenedor_in1">
                    <div> Nombre: Geraldine Nicold Molina Ávila </div> 
                    <div> Documento de identidad: 1000728673. </div> 
                    <div> Edad: 18 años. </div> 
                    <div> Dirección:  Calle 181A ·16-77. Bogotá-Colombia.  </div> 
                    <div> Correo Electrónico: gerald0805xd@gmail.com </div> 
                    <div> Celular: 3195780037. </div> 
                    <div className=" boton ">  
                    
                    <Popup
                        trigger={<button className="button"> Open Modal </button>} //Modal de la pagina
                        modal
                        nested
                    >
                        {close => (
                        <div className="modal">
                            <button className="close" onClick={close} id="cerrar">
                            &times;
                            </button>
                            <div className="content">
                            {' '}
                            Referencias personales:<br></br><br></br>

                            Ma. Patricia Rojas Buitrago.<br></br>
                            Cargo: Coordinadora Colegio Rafael Uribe Uribe de Bogotá.<br></br>
                            Cel: 310 2455109<br></br>
                            Email: mprojasbu@educacionbogota.edu.co<br></br><br></br>

                            Jorge Eliécer Murillo Ortiz.<br></br>
                            Cargo: Docente Filosofía Secretaría de Educación de Bogotá. <br></br>
                            Cel: 317 3788810<br></br>
                            Email: muriyo01@gmail.com <br></br>
                            </div>
                        </div>
                        )}
                    </Popup>
                    
                    
                </div>
            </div> 
                    
                

                <div className="contenedor_in2">
                    <img src={infor} alt="in" />
                </div>
        
            </div>
        </div>                       
            
            <Footer />

        </>
        
    )
}



export default Informacion;