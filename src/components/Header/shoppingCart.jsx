import shoppingCart from '../../assets/mini-cart.svg';

export const ShoppingCartButton = () => {
  return (
    <>
      <button className="btn btn-link p-0 position-relative" aria-label="Shopping cart icon">
        <span className="position-absolute start-100 translate-middle badge rounded-pill" style={{ fontSize: '12px', padding: '0.2em 0.5em', top: '9px', backgroundColor: '#C92071a'}}>
                  2
        </span>
        <img src={ shoppingCart }size={18} />
      </button>
    </>
  )
}