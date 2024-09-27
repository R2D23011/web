import { useParams } from "react-router-dom";
import MesasProducts from '../../Products/MesasProducts.json'
import './Styleditem.css'

function MesaDetalle() {
  const { id } = useParams();
  const mesa = MesasProducts.catalogoMesas.find(s => s.id === parseInt(id));
  
  
  const whatsappLink = `https://wa.me/+56975628652?text=Hola%2C%20estoy%20interesado%20en%20comprar:%20${mesa.nombre}`;
  
  
  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img src={mesa.imagen} alt={mesa.nombre} />
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
          <a href={whatsappLink} className="btnn" target="_blank" rel="noopener noreferrer">
          Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default MesaDetalle;