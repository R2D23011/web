import './header.css'
import Logoimg from '../../assets/Logo.svg'

export const Header = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container-fluid" id="content">
            <a className="navbar-brand" href="#">
                <img src={Logoimg} alt="Logo" width='120px' className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"     aria-controls="navbarNavDropdown"    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" id='activo' aria-current="page" href="#">Sillas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  href="#">Muebles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  href="#">Escritorios</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <a className="nav-link"  href="#">Contacto</a>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

