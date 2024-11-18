import { Product } from "../ProductCard/ProductCard";
import axios from 'axios';
import { useState, useEffect } from "react";
import './ProductGrid.css'
export const ProductGrid = ({ length, columns }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = () => {
      axios.get('http://localhost:3000/products')
        .then((response) => {
          const productsData = response.data.data;
          setProducts(productsData);
          localStorage.setItem('products', JSON.stringify(productsData));
        })
        .catch((error) => {
          console.error("Erro ao buscar produtos", error);
        });
    };
  
    const cachedProducts = localStorage.getItem('products');
    if (cachedProducts) {
      setProducts(JSON.parse(cachedProducts));
    } else {
      fetchData();
    }
  
    const interval = setInterval(fetchData, 60000);
  
    return () => clearInterval(interval);
  }, []);
  

  const gridStyle = {
    gridTemplateColumns: `repeat(${columns || 4}, 1fr)` || 'repeat(4, 1fr)', 
  };

  const size = length || products.length

  return (
    <div className="grid-container" style={gridStyle}>
      {products.slice(0, size).map((product) => (
        <Product key={product.id} props={product} />
      ))}
    </div>
  );
};


