import { ProductGrid } from '../ProductGrid/ProductGrid.jsx';
import  { ProductListing }   from '../ProductListing/ProductListing.jsx';
import './ProductListingLarge.css'
import '@globalStyles/reset.css'
const FilterOptions = () => {
  return (
    <div className="filter-options">
      <h3>Filtrar por</h3>
      <div className="filter-item">
        <label>
          <input type="checkbox" name="marca" value="adidas" /> Adidas
        </label>
      </div>
      <div className="filter-item">
        <label>
          <input type="checkbox" name="marca" value="k-swiss" /> K-Swiss
        </label>
      </div>
      <h3>Categoria</h3>
      <div className="filter-item">
        <label>
          <input type="checkbox" name="categoria" value="esporte-e-lazer" /> Esporte e Lazer
        </label>
      </div>
      <div className="filter-item">
        <label>
          <input type="checkbox" name="categoria" value="casual" /> Casual
        </label>
      </div>
      <h3>Gênero</h3>
      <div className="filter-item">
        <label>
          <input type="checkbox" name="genero" value="masculino" /> Masculino
        </label>
      </div>
      <div className="filter-item">
        <label>
          <input type="checkbox" name="genero" value="feminino" /> Feminino
        </label>
      </div>
      <h3>Estado</h3>
      <div className="filter-item">
        <label>
          <input type="checkbox" name="estado" value="novo" /> Novo
        </label>
      </div>
    </div>
  );
};


export function ProductListingLarge() {
  return (
    <div className="products-section-list">
      <FilterOptions/>   
      <ProductGrid columns={3}></ProductGrid>
    </div>
  )
}


