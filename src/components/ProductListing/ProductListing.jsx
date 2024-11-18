import { ProductGrid } from '../ProductGrid/ProductGrid'
import arrow from '../../assets/long-arrow-right.svg'
import '@globalStyles/ColorsVariables.css'
import './ProductListing.css'

export function ProductListing({ displayValue, columns }) {
  return(
    <>
      <div className="products-container">
        <div className="layout">
          <div className="products-cont-header">
            <h4>Produtos em destaque</h4>
            <button>Ver todos <img src={arrow} className="right-arrow"/></button>
          </div>
          <ProductGrid columns={columns} length={displayValue} />
        </div>
      </div>
    </>
  )
}