import { useState, useEffect } from 'react';
import axios from 'axios';
import { FilterOptions } from '../FilterOption/FilterOptions.jsx';
import { ProductGrid } from '../ProductGrid/ProductGrid.jsx';
import './ProductListingLarge.css';
import '@globalStyles/reset.css';

export function ProductListingLarge() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedMarks, setSelectedMarks] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      const productsData = response.data.data;
      setProducts(productsData);
      setFilteredProducts(productsData);
      localStorage.setItem('products', JSON.stringify(productsData));
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  useEffect(() => {
    const cachedProducts = localStorage.getItem('products');
    if (cachedProducts) {
      const parsedProducts = JSON.parse(cachedProducts);
      setProducts(parsedProducts);
      setFilteredProducts(parsedProducts);
    } else {
      fetchProducts();
    }

    const intervalId = setInterval(fetchProducts, 120000);
    return () => clearInterval(intervalId);
  }, []);

  const filterProducts = (marks) => {
    if (marks.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => marks.includes(product.mark));
      setFilteredProducts(filtered);
    }
  };

  const handleMarkChange = (marks) => {
    setSelectedMarks(marks);
    filterProducts(marks);
  };

  return (
    <div className="products-section-list">
      <FilterOptions onMarkChange={handleMarkChange} />
      <ProductGrid columns={3} products={filteredProducts} />
    </div>
  );
}
