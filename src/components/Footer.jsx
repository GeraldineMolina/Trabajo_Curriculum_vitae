import React from 'react'
import '../utils/css/footer_estilos.css'
import imgGit from '../utils/images/github.png'
import imgFacebook from '../utils/images/facebook.png'
import imgInstagram from '../utils/images/instagram.png'


function Footer(){//Componente footer para el pie de pagina
    return(
        <div id="root">
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-content">
                    <div className="footer-1">
                        <h3 className="footer-letra">Email: gerald0805xd@gmail.com</h3>
                        <h3 className="footer-letra">Cel: 3195780037</h3>
                    </div>
                    <div className="footer-2">
                        <a href="https://github.com/GeraldineMolina"><img className="img" src={imgGit} alt="git"/></a>
                        <a href="https://www.facebook.com/gerald.molina.334491/"><img className="img" src={imgFacebook} alt="facebook"/></a>
                        <a href="https://www.instagram.com/mitsukig05/?hl=es-la"><img className="img" src={imgInstagram} alt="instagram"/></a>
                    </div>
                </div>
                <svg className="footer-svg" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#212624" points="0,0 100,0 0,4"/>
                </svg>
            </div>
        </footer>
        </div>
    )
}

export default Footer