import { useParams } from "react-router-dom";
import EscritoriosProductos from '../../Products/EscritoriosProductos.json'
import './item.css'
import { useState } from "react";

function EscritorioDetalle() {
  const { id } = useParams();
  const escritorio = EscritoriosProductos.catalogoEscritorios.find(s => s.id === parseInt(id));
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

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  
  const whatsappLink = `https://wa.me/+56975628652?text=Hola%2C%20estoy%20interesado%20en%20comprar:%20${escritorio.nombre}.%0ACantidad:%20${quantity}`;
  
  
  return (
    <div className="product-detail-container">
      <div className="product-detail">
      <div
          className={`img-container ${isZoomed ? 'zoom' : ''}`}
          onClick={handleZoom}
          onMouseMove={handleMouseMove}
        >
          <img src={escritorio.imagen} alt={escritorio.nombre} style={zoomStyle} />
        </div>
        
        <div className="details">
          <h1>{escritorio.nombre}</h1>
          <p>{escritorio.descripcion}</p>
          <p>Color: {escritorio.color}</p>
          <p>Material: {escritorio.material}</p>
          <p className="precio">Precio: ${escritorio.precio}</p>
          <h3>Características:</h3>
          <ul>
            {escritorio.caracteristicas.map((caracteristica, index) => (
            <li key={index}>{caracteristica}</li>
            ))}
          </ul>
          <div className="quantity-container">
            <label htmlFor="quantity">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <a href={whatsappLink} className="btnn" target="_blank" rel="noopener noreferrer">
          Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default EscritorioDetalle;