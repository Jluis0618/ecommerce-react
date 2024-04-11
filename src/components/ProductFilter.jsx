import React from 'react'
import './ProductFilter.css'

export const ProductFilter = () => {
  return (
    <div className="filter-container">
    <h3>Filtrar Productos</h3>
    <div className="filter-section">
        <label htmlFor="search-input">Buscar Productos:</label>
        <input type="text" id="search-input" placeholder="Ingrese término de búsqueda" />
      </div>
    <div className="filter-content">
      <div className="filter-section">
        <label htmlFor="category-select">Categoría:</label>
        <select id="category-select">
          <option value="">Todas</option>
          <option value="celulares">Celulares</option>
          <option value="laptops">Laptops</option>
          <option value="tablets">Tablets</option>
          {/* Agrega más opciones de categorías según sea necesario */}
        </select>
      </div>

      <div className="filter-section">
        <label htmlFor="price-range">Rango de Precio:</label>
        <select id="price-range">
          <option value="">Todos</option>
          <option value="0-100">$0 - $100</option>
          <option value="101-300">$101 - $300</option>
          <option value="301-500">$301 - $500</option>
          {/* Agrega más opciones de rangos de precios según sea necesario */}
        </select>
      </div>

      <button className="filter-button">Aplicar Filtros</button>
    </div>
  </div>
  )
}
