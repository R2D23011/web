import { Link } from "react-router-dom"
import './footer.css'

const Footer = () => {
  return (
    <footer className="container-fluid">
        <div className="row pd-5 bg-dark text-white justify-content-around">
            <div className="col-xs-8 col-md-4 col-lg-2">
                <p className="h3 mb-2 mt-4">Comforty</p>
                <p className="text-secondary">© Comforty, Inc</p>
            </div>
            <div className="col-xs-8 col-md-4 col-lg-2 mb-3">
                <p className="h5 mb-3">Contacto</p>
                <div className="mb-2">
                    <Link className="text-secondary text-decoration-none" to='tel:+584242429897'>+51(234) 32938-323</Link>
                </div>
                <div className="mb-2">
                    <Link className="text-secondary text-decoration-none" to='mailto:carlitosaac16@gmail.com'>shopify@mail.com</Link>
                </div>
                <div className="mb-2">
                    <Link className="text-secondary text-decoration-none" to='https://maps.app.goo.gl/9RELaP6bmAe9yfqQ6' target="blank"> Chañaral, Atacama, Chile</Link>
                </div>
            </div>
            <div className="col-xs-8 col-md-4 col-lg-2">
                <p className="h5 mb-3">Social</p>
                <div className="mb-2">
                    <Link className="text-secondary text-decoration-none" to='https://wa.me/584242429897?text=Hola,%20vengo%20de%20tu%20pagina%20web%20y%20me%20gustaria%20saber%20mas%20sobre..'>Whatsapp</Link>
                </div>
                <div className="mb-2">
                    <Link className="text-secondary text-decoration-none" to='/'>Facebook</Link>
                </div>
                <div className="mb-2">
                    <Link className="text-secondary text-decoration-none" to='/'>Instagram</Link>
                </div>
            </div>
            <div className="bottom bg-dark">
                <p className="derechos text-secondary">© Todos los Derechos Reservados, Pagina creada por <a className="text-decoration-none linkedin" href="www.linkedin.com/in/carlos-acevedo-2947b420a">ArturoD3v</a></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
