import { Link } from 'react-router-dom'
import SillasProducts from '../../../Products/SillasProducts.json'
import '../CatalogStyle.css'
import { useState } from 'react';

export const SillaCatalog = () => {
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

  const prices = SillasProducts.catalogoSillas.map(silla => silla.precio);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const filteredSillas = SillasProducts.catalogoSillas.filter(silla => {
    return (
      (selectedColor === '' || silla.color.includes(selectedColor)) &&
      (selectedMaterial === '' || silla.material.includes(selectedMaterial)) &&
      (selectedPrice === '' || silla.precio <= parseFloat(selectedPrice))
    );
  });

  return (
    <div className='margin-top'>
      <div className="filters">
        <select value={selectedColor} onChange={handleColorChange} className="filter-select">
          <option value="">Todos los colores</option>
          <option value="Negro">Negro</option>
          <option value="Marron">Marron</option>
          {/* Agrega más opciones según tus datos */}
        </select>
        <select value={selectedMaterial} onChange={handleMaterialChange} className="filter-select">
          <option value="">Todos los materiales</option>
          <option value="PVC">PVC</option>
          <option value="Metal">Metal</option>
          <option value="Ecocuero">Ecocuero</option>
          <option value="Policarbono">Policarbono</option>
          <option value="Polipropeno">Polipropeno</option>
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
        {filteredSillas.map(silla => (
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
  );
}

