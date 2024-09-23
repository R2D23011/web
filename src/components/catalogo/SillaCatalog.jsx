import SillasProducts from '../../Products/SillasProducts/SillasProducts.json'
import './SillaCatalog.css'
export const SillaCatalog = () => {
  return (
    <div>
      <h1 className='sillah1'>Catálogo de Sillas</h1>
      <div className="catalogo">
        {SillasProducts.catalogoSillas.map(silla => (
          <div key={silla.id} className="silla">
            <img src={silla.imagen} alt={silla.nombre} className="silla-imagen" />
            <h2>{silla.nombre}</h2>
            <p>{silla.descripcion}</p>
            <p className="precio">Precio: ${silla.precio}</p>
            <p>Color: {silla.color}</p>
            <p>Material: {silla.material}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

