import { Link } from 'react-router-dom'
import MesasProducts from '../../../Products/MesasProducts.json'
import '../CatalogStyle.css'
import { useEffect, useState } from 'react';


export const MesasCatalog = () => {

  const prices = MesasProducts.catalogoMesas.map(escritorio => escritorio.precio);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(maxPrice); // establece el precio maximo como valor por defecto

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleMaterialChange = (event) => {
    setSelectedMaterial(event.target.value);
  };

  useEffect(() => {
    setSelectedPrice(maxPrice);
  }, [maxPrice]);

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const filteredMesas = MesasProducts.catalogoMesas.filter(escritorio => {
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
          <option value="">Todos los colores</option>
          <option value="Marron">Marron</option>
          <option value="Blanco">Blanco</option>
          <option value="Gris">Gris</option>
          <option value="Transparente">Transparente</option>
          {/* Agrega más opciones según tus datos */}
        </select>
        <select value={selectedMaterial} onChange={handleMaterialChange} className="filter-select">
          <option value="">Todos los materiales</option>
          <option value="Aluminio">Aluminio</option>
          <option value="Metal">Metal</option>
          <option value="Plastico">Plastico</option>
          <option value="Madera">Madera</option>
          <option value="Laminado">Laminado</option>
          <option value="Marmol">Marmol</option>
          {/* Agrega más opciones según tus datos */}
        </select>
        <div className="price-filter">
          <label>Precio máximo: ${selectedPrice}.000</label>
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
        {filteredMesas.map(mesa => (
          <Link key={mesa.id} className="silla text-decoration-none text-dark" to={`/mesa/${mesa.id}`}>
            <div className='silla-imagen-container'>
              <img src={mesa.imagen} alt={mesa.nombre} className="silla-imagen" />
            </div>
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