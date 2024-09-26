import { Link } from 'react-router-dom'
import './carousel.css'


export const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src='https://img1.wallspic.com/crops/4/5/3/0/30354/30354-suministros_de_oficina-1920x1080.jpg' className="d-block w-100 img-fluid" alt="..."/>

                <div className='carousel-caption mb-4'>
                  <h3 style={{marginBottom:'15px'}}>Ergonomía y Comfort para tu Oficina</h3>
                  <Link className="btn btn-dark" to="/sillasCatalog">Ver más</Link>
                </div>
                
            </div>
            <div className="carousel-item">
                <img src='https://manueldelgado.com.mx/cdn/shop/articles/las-mejores-sillas-de-oficina-para-trabajar-comodamente-523088.jpg?v=1645837930' className="d-block w-100 img-fluid" alt="..."/>

                <div className='carousel-caption mb-4'>
                  <h3 style={{marginBottom:'15px'}}>El Centro de tu Espacio de Trabajo</h3>
                  <Link className="btn btn-dark" to="/mesasCatalog">Ver más</Link>
                </div>

            </div>
            <div className="carousel-item">
              <img src='https://wallpapers.com/images/hd/zoom-background-office-for-men-zf4pl7gk5dh543v4.jpg' className="d-block w-100 img-fluid" alt="..."/>
              <div className='carousel-caption mb-4'>
                  <h3 style={{marginBottom:'15px'}}>Escritorios para Profesionales Exigentes</h3>
                  <Link className="btn btn-dark" to="/escritoriosCatalog">Ver más</Link>
                </div>

            </div>
            
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}
