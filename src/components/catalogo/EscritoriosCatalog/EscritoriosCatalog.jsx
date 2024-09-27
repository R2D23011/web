import { Link } from 'react-router-dom'
import EscritoriosProductos from '../../../Products/EscritoriosProductos.json'
import '../CatalogStyle.css'
import { useState } from 'react';


export const EscritoriosCatalog = () => {

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleMaterialChange = (event) => {
    setSelectedMaterial(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const prices = EscritoriosProductos.catalogoEscritorios.map(escritorio => escritorio.precio);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const filteredEscritorios = EscritoriosProductos.catalogoEscritorios.filter(escritorio => {
    return (
      (selectedColor === '' || escritorio.color.includes(selectedColor)) &&
      (selectedMaterial === '' || escritorio.material.includes(selectedMaterial)) &&
      (selectedPrice === '' || escritorio.precio <= parseFloat(selectedPrice))
    );
  });



  return (
    <div className='margin-top'>
      <div className="filters">
        <select value={selectedColor} onChange={handleColorChange} className="filter-select">
          <option value="">Todos los Colores</option>
          <option value="Negro">Negro</option>
          <option value="Blanco">Blanco</option>
          <option value="Gris">Gris</option>
          <option value="Marron">Marron</option>
          {/* Agrega más opciones según tus datos */}
        </select>
        <select value={selectedMaterial} onChange={handleMaterialChange} className="filter-select">
          <option value="">Todos los materiales</option>
          <option value="Madera">Madera</option>
          <option value="Metal">Metal</option>
          <option value="Vidrio">Vidrio</option>
          <option value="Laminado">Laminado</option>
          <option value="Aluminio">Aluminio</option>
          <option value="Plastico">Plastico</option>
          {/* Agrega más opciones según tus datos */}
        </select>
        <div className="price-filter">
          <label>Precio máximo: ${selectedPrice}</label>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={selectedPrice}
            onChange={handlePriceChange}
            className="price-slider"
          />
        </div>
      </div>
      <div className="catalogo">
        {filteredEscritorios.map(escritorio => (
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