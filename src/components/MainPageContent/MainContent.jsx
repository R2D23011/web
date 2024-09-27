import { Link } from 'react-router-dom'
import './MainContent.css'

export const MainContent = () => {
  return (
    <div className="container-fluid maincontent">
        <div className='container-main mt-3'>
            <h2 className='display-6'>Quienes somos?</h2>
            <h2 className='display-6'>Que podemos ofrecerte?</h2>
            <h2 className='display-6'>Nuestros valores</h2>
        </div>
        <div className="container text-center" id='galeria'>
            <div className="row">
                <div className="col-lg-4 col-xs-12">
                    <Link className='text-decoration-none text-black' to='/sillasCatalog'>
                        <img src='https://www.tupi.com.py/imagen/600__600__354b77-lvs-009.jpg' alt='imagen de silla'/>
                    </Link>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <Link className='text-decoration-none text-black' to='/mesasCatalog'>
                        <img src='https://abba.com.py/wp-content/uploads/2023/06/Mesa-Oficina-ME4119-Nogal-Ambiente-Abba-Muebles-600x600.jpg'/>
                    </Link>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <Link className='text-decoration-none text-black' to='/escritoriosCatalog'>
                        <img src='https://i0.wp.com/galeeshome.com/wp-content/uploads/2023/01/ESCRITORIO-NIA.jpg?fit=1000%2C1000&ssl=1'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
