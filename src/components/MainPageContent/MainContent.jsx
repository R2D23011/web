import { Link } from 'react-router-dom'
import './MainContent.css'
import ContactForm from '../Contacto/contacto.jsx'

export const MainContent = () => {
  return (
    <div className="container-fluid maincontent" loading="lazy">
        <div className="section section1">
            <h1>Bienvenido a BGK</h1>
            <p>Encuentra los mejores productos para tu oficina aqui.</p>
        </div>
        <div className="section section2">
            <h2>Nuestros Productos</h2>
            <p>Calidad y variedad en cada categoría.</p>
        </div>
        <div className="section section3">
            <h2>Ofertas Especiales</h2>
            <p>No te pierdas nuestras promociones exclusivas.</p>
        </div>
        <div className="section section4">
            <h2>Contáctanos</h2>
            <div style={{position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden'}}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.268789866127!2d-70.68752665219611!3d-33.44230304615298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5af9b5bf591%3A0x3b9b2f01cfe2b3d6!2sMuseo%20Ferroviario%20de%20Santiago!5e0!3m2!1ses!2sve!4v1727579368352!5m2!1ses!2sve" 
                    width="600" 
                    height="600" 
                    style={{border:"0", position: 'absolute', top: '0', left: '0', width: '100%', height: '70dvh'}}
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
            </div>
        </div>
        <div className="container text-center" id='galeria'>
            <div className="row">
                <div className="col-lg-4 col-xs-12">
                    <Link className='text-decoration-none text-black' to='/sillasCatalog'>
                        <div className="image-container">
                            <img src='https://www.tupi.com.py/imagen/600__600__354b77-lvs-009.jpg' alt='imagen de silla'/>
                            <div className="centered-text">Sillas</div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <Link className='text-decoration-none text-black' to='/mesasCatalog'>
                        <div className="image-container">
                            <img src='https://abba.com.py/wp-content/uploads/2023/06/Mesa-Oficina-ME4119-Nogal-Ambiente-Abba-Muebles-600x600.jpg' alt='imagen de mesa'/>
                            <div className="centered-text">Mesas</div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <Link className='text-decoration-none text-black' to='/escritoriosCatalog'>
                        <div className="image-container">
                            <img src='https://i0.wp.com/galeeshome.com/wp-content/uploads/2023/01/ESCRITORIO-NIA.jpg?fit=1000%2C1000&ssl=1' alt='imagen de escritorio'/>
                            <div className="centered-text">Escritorios</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
}
