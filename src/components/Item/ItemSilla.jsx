import { useParams } from "react-router-dom";
import SillasProducts from '../../Products/SillasProducts.json'
import './Styleditem.css'

function SillaDetalle() {
  const { id } = useParams();
  const silla = SillasProducts.catalogoSillas.find(s => s.id === parseInt(id));
  
  
  if(!silla){
    return(<h2> Producto no Encontrado</h2>)
  }
  
  const whatsappLink = `https://wa.me/+56975628652?text=Hola%2C%20estoy%20interesado%20en%20comprar:%20${silla.nombre}`;
  
  
  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img src={silla.imagen} alt={silla.nombre} />
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
