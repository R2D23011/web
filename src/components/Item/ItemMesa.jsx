import { useParams } from "react-router-dom";
import MesasProducts from '../../Products/MesasProducts.json'
import './item.css'
import { useState } from "react";

function MesaDetalle() {
  const { id } = useParams();
  const mesa = MesasProducts.catalogoMesas.find(s => s.id === parseInt(id));
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
  
  
  const whatsappLink = `https://wa.me/+56975628652?text=Hola%2C%20estoy%20interesado%20en%20comprar:%20${mesa.nombre}.%0ACantidad:%20${quantity}`;
  
  
  return (
    <div className="product-detail-container">
      <div className="product-detail">
      <div
          className={`img-container ${isZoomed ? 'zoom' : ''}`}
          onClick={handleZoom}
          onMouseMove={handleMouseMove}
        >
          <img src={mesa.imagen} alt={mesa.nombre} style={zoomStyle} />
      </div>
        <div className="details">
          <h1>{mesa.nombre}</h1>
          <p>{mesa.descripcion}</p>
          <p>Color: {mesa.color}</p>
          <p>Material: {mesa.material}</p>
          <p className="precio">Precio: ${mesa.precio}</p>
          <h3>Características:</h3>
          <ul>
            {mesa.caracteristicas.map((caracteristica, index) => (
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

export default MesaDetalle;