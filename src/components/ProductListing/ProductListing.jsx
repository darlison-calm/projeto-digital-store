import { Product } from "../ProductCard/ProductCard";
import { tenisDados } from '../../tenis.js';
import '@globalStyles/ColorsVariables.css'
import './ProductListing.css'

export function ProductListing() {
    

  return(
    <>
      <div className="products-container">
        <div className="grid-container">
          {tenisDados.slice(0, 8).map((tenisDados) => (
              <Product props={tenisDados}/>
            ))}
        </div>
      </div>

    </>
  )
}