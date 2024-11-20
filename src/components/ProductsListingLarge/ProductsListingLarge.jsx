import { ProductGrid } from '../ProductGrid/ProductGrid.jsx';
import { FilterOptions } from '../FilterOption/FilterOptions.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductListingLarge.css'
import '@globalStyles/reset.css'

export function ProductListingLarge() {
  const [products, setProducts] = useState([]);
  const [selectedMarks, setSelectedMarks] = useState([]);

  const fetchProducts = async (marks = []) => {
    try {
      let url = 'http://localhost:3000/products';
      if (marks.length > 0) {
        url += `?mark=${marks.join(',')}`;
      }
      
      const response = await axios.get(url);
      const productsData = response.data.data;
      setProducts(productsData);
      localStorage.setItem('products', JSON.stringify(productsData));
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
    }
  };

  useEffect(() => {
    const cachedProducts = localStorage.getItem('products');
    if (cachedProducts) {
      setProducts(JSON.parse(cachedProducts));
    } else {
      fetchProducts();
    }

    const interval = setInterval(() => fetchProducts(selectedMarks), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="products-section-list">
      <FilterOptions 
        onMarkChange={(marks) => {
          setSelectedMarks(marks);
          fetchProducts(marks);
        }}
      />
      <ProductGrid columns={3} products={products}/>
    </div>
  );
}

