import { Product } from "../ProductCard/ProductCard";
import { tenisDados } from '../../tenis.js';
import arrow from '../../assets/long-arrow-right.svg'
import '@globalStyles/ColorsVariables.css'
import './ProductListing.css'

export function ProductListing() {
    

  return(
    <>
      <div className="products-container">
        <div className="layout">
          <div className="d-flex justify-content-between">
            <h4>Produtos em destaque</h4>
            <button>Ver todos <img src={arrow} className="right-arrow" alt="" srcset="" /></button>
          </div>
          <div className="grid-container">
            {tenisDados.slice(0, 8).map((tenisDados) => (
                <Product props={tenisDados}/>
              ))}
          </div>
        </div>
      </div>

    </>
  )
}