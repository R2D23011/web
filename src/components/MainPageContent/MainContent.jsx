import { Link } from 'react-router-dom'
import './MainContent.css'
import Map from '../Map/maps'
import ContactForm from '../Contacto/contacto'

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
            <div className='sectioncontact'>
                <Map />
                <ContactForm />
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
