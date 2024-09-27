import './header.css'
import Logoimg from '../../assets/Logo.png'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Header = () => {

    const location = useLocation()
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlHeader = () => {
        if (window.scrollY > lastScrollY) {
            // Scroll hacia abajo
            setShow(false);
        } else {
            // Scroll hacia arriba
            setShow(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlHeader);
        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    }, [lastScrollY]);


    return (
        <nav className={`navbar fixed-top navbar-expand-lg ${show ? 'show' : 'hide'}`} id='Header'>
            <div className="container-fluid" id="content">
                <Link className="navbar-brand" to="/" >
                    <img src={Logoimg} alt="Logo" className="d-inline-block brand" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"     aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
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

