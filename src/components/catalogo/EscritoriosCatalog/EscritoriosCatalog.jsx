import { Link } from 'react-router-dom'
import EscritoriosProductos from '../../../Products/EscritoriosProductos.json'
import '../CatalogStyle.css'


export const EscritoriosCatalog = () => {

  return (
    <div className='margin-top'>
      <div className="catalogo">
        {EscritoriosProductos.catalogoEscritorios.map(escritorio => (
          <Link key={escritorio.id} className="silla text-decoration-none text-dark" to={`/escritorio/${escritorio.id}`}>
            <img src={escritorio.imagen} alt={escritorio.nombre} className="silla-imagen" />
            <h2>{escritorio.nombre}</h2>
            <p>{escritorio.descripcion}</p>
            <p>Color: {escritorio.color}</p>
            <p>Material: {escritorio.material}</p>
            <p className="precio">Precio: ${escritorio.precio}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}