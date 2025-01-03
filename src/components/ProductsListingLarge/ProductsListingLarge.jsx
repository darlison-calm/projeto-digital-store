import { useState, useEffect, useCallback } from 'react';
import { ProductGrid } from '../ProductGrid/ProductGrid.jsx';
import { FilterOptions } from '../FilterOption/FilterOptions.jsx';
import axios from 'axios';
import './ProductListingLarge.css';
import '@globalStyles/reset.css';

export function ProductListingLarge() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedMarks, setSelectedMarks] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      const productsData = response.data.data;
      
      const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
      
      const isFirstFetch = products.length === 0;
      
      const hasNewProducts =
        productsData.length !== storedProducts.length ||
        productsData.some(newProduct =>
          !storedProducts.some(storedProduct => storedProduct.id === newProduct.id)
        );
  
      if (isFirstFetch || hasNewProducts) {
        setProducts(productsData);
        setFilteredProducts(productsData);
        localStorage.setItem('products', JSON.stringify(productsData));
      }
    } catch (error) {
      console.error('Error fetching products', error);
    }
  }, [products]); 

  useEffect(() => {
    const cachedProducts = localStorage.getItem('products');
    if (cachedProducts) {
      const productsData = JSON.parse(cachedProducts);
      setProducts(productsData);
      setFilteredProducts(productsData);
    }
    
    const productCheckInterval = setInterval(fetchProducts, 60000); 
    
    return () => clearInterval(productCheckInterval);
  }, [fetchProducts]);

  const applyFilters = useCallback(() => {
    let filtered = [...products];

    if (selectedMarks.length === 0 && selectedCategories.length === 0) {
      setFilteredProducts(products);
      return;
    }

    if (selectedMarks.length > 0) {
      filtered = filtered.filter(product =>
        selectedMarks.some(mark => product.mark.toLowerCase() === mark.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        product.categories.some(category =>
          selectedCategories.includes(category.slug)
        )
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedMarks, selectedCategories]);
  

  useEffect(() => {
    applyFilters();
  },[products, selectedMarks, selectedCategories] );

  return (
    <div className="products-section-list">
      <FilterOptions
        onMarkChange={(marks) => {
          setSelectedMarks(marks);
        }}
        onCategoryChange={(categories) => {
          setSelectedCategories(categories);
        }}
      />
      <ProductGrid columns={3} products={filteredProducts} className="small-grid"/>
    </div>
  );
}