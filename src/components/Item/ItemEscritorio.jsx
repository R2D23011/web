import { useParams } from "react-router-dom";
import EscritoriosProductos from '../../Products/EscritoriosProductos.json'
import './item.css'

function EscritorioDetalle() {
  const { id } = useParams();
  const escritorio = EscritoriosProductos.catalogoEscritorios.find(s => s.id === parseInt(id));
  
  
  const whatsappLink = `https://wa.me/+56975628652?text=Hola%2C%20estoy%20interesado%20en%20comprar:%20${escritorio.nombre}`;
  
  
  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img src={escritorio.imagen} alt={escritorio.nombre} />
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
          <a href={whatsappLink} className="btnn" target="_blank" rel="noopener noreferrer">
          Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default EscritorioDetalle;