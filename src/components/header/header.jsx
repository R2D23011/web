import './header.css'
import Logoimg from '../../assets/Logo.png'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {

    const location = useLocation()


    return (
        <nav className="navbar fixed-top navbar-expand-lg" id='Header'>
            <div className="container-fluid" id="content">
                <Link className="navbar-brand" to="/" >
                    <img src={Logoimg} alt="Logo" className="d-inline-block brand" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"     aria-controls="navbarNavDropdown"    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/sillasCatalog' ? 'activeheader' : ''}`} to="/sillasCatalog">Sillas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/mesasCatalog' ? 'activeheader' : ''}`} to="/mesasCatalog">Mesas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/escritoriosCatalog' ? 'activeheader' : ''}`} to="/escritoriosCatalog">Escritorios</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <Link className={`nav-link ${location.pathname === '/contacto' ? 'activeheader' : ''}`} to='/contacto'>Contacto</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

