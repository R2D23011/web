import { useParams } from "react-router-dom";
import SillasProducts from '../../Products/SillasProducts.json'
import './item.css'
import { useState } from "react";

function SillaDetalle() {
  const { id } = useParams();
  const silla = SillasProducts.catalogoSillas.find(s => s.id === parseInt(id));
  
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleMouseMove = (e) => {
    if (isZoomed) {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 100;
      const y = ((e.pageY - top) / height) * 100;
      setZoomStyle({ transformOrigin: `${x}% ${y}%` });
    }
  };
  
  const whatsappLink = `https://wa.me/+56975628652?text=Hola%2C%20estoy%20interesado%20en%20comprar:%20${silla.nombre}`;
  
  
  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div 
          className={`img-container ${isZoomed ? 'zoom' : ''}`}
          onClick={handleZoom}
          onMouseMove={handleMouseMove}>
          <img src={silla.imagen} alt={silla.nombre} style={zoomStyle}/>
        </div>
        <div className="details">
          <h1>{silla.nombre}</h1>
          <p>{silla.descripcion}</p>
          <p>Color: {silla.color}</p>
          <p>Material: {silla.material}</p>
          <p className="precio">Precio: ${silla.precio}</p>
          <h3>Características:</h3>
          <ul>
            {silla.caracteristicas.map((caracteristica, index) => (
            <li key={index}>{caracteristica}</li>
            ))}
          </ul>
          <a href={whatsappLink} className="btnn" target="_blank" rel="noopener noreferrer">
          Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default SillaDetalle;
