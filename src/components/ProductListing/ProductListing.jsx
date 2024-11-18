import { Product } from "../ProductCard/ProductCard";
import { tenisDados } from '../../tenis.js';
import arrow from '../../assets/long-arrow-right.svg'
import '@globalStyles/ColorsVariables.css'
import './ProductListing.css'
import axios from 'axios';
import { useState, useEffect } from "react";
export function ProductListing({ value }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []); 

  return(
    <>
      <div className="products-container">
        <div className="layout">
          <div className="products-cont-header">
            <h4>Produtos em destaque</h4>
            <button>Ver todos <img src={arrow} className="right-arrow" alt="" srcset="" /></button>
          </div>
          <div className="grid-container">
            {products.slice(0, value).map((products) => (
                <Product key={products.id} props={products}/>
              ))}
          </div>
        </div>
      </div>

    </>
  )
}