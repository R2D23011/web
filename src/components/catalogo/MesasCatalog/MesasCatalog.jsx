import { Link } from 'react-router-dom'
import MesasProducts from '../../../Products/MesasProducts.json'
import '../CatalogStyle.css'


export const MesasCatalog = () => {

  return (
    <div className='margin-top'>
      <div className="catalogo">
        {MesasProducts.catalogoMesas.map(mesa => (
          <Link key={mesa.id} className="silla text-decoration-none text-dark" to={`/mesa/${mesa.id}`}>
            <img src={mesa.imagen} alt={mesa.nombre} className="silla-imagen" />
            <h2>{mesa.nombre}</h2>
            <p>{mesa.descripcion}</p>
            <p>Color: {mesa.color}</p>
            <p>Material: {mesa.material}</p>
            <p className="precio">Precio: ${mesa.precio}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}