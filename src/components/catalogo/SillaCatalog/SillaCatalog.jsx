import { Link } from 'react-router-dom'
import SillasProducts from '../../../Products/SillasProducts.json'
import '../CatalogStyle.css'


export const SillaCatalog = () => {

  return (
    <div className='margin-top'>
      <div className="catalogo">
        {SillasProducts.catalogoSillas.map(silla => (
          <Link key={silla.id} className="silla text-decoration-none text-dark" to={`/silla/${silla.id}`}>
            <img src={silla.imagen} alt={silla.nombre} className="silla-imagen" />
            <h2>{silla.nombre}</h2>
            <p>{silla.descripcion}</p>
            <p>Color: {silla.color}</p>
            <p>Material: {silla.material}</p>
            <p className="precio">Precio: ${silla.precio}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

