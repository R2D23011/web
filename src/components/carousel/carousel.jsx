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
                <img src='https://fotografias.lasexta.com/clipping/cmsimages02/2023/05/04/F6DA090A-7C48-4129-B09D-7B127D872B39/sillas-oficina-verano_69.jpg?crop=1300,731,x0,y9&width=1280&height=720&optimize=low&format=jpg' className="d-block w-100 img-fluid" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src='https://sillas360.com/wp-content/uploads/2018/04/taburete-silla-ibiza-oficinas.jpg' className="d-block w-100 img-fluid" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src='https://mobiliariosdeoficina.com/wp-content/uploads/elementor/thumbs/cabecera-silla-ergonomica-blog-q1y47fujioag2r8pshwz7eiqyo9lyc5re62ar3jqjk.jpg' className="d-block w-100 img-fluid" alt="..."/>
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
