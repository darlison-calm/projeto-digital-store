import './ProductCard.css'

export function Product({ props }) {
    const discount = (v, vd) => {
        return (((v - vd) / v) * 100).toFixed(0)
    }
    return (
    <>
      <div className="card-product">
            <div className='card-product-top'>
                <span>{discount(props.price, props.price_with_discount)}% OFF</span>
                <img src={props.images[0].path} alt={'imagem do tenis modelo '+ props.mark} />
            </div>
            <div className='card-product-bot'>
        
                    <span>Tênis</span>
                    <span>{props.name}</span>
               
                <span>
                    <span>${props.price}</span>
                    ${props.price_with_discount}
                </span>
            </div>
        </div>
    </>
    )
}