import '../Product/product.css'

export function Product(props) {
    const desconto = (v, vd) => {
        return (((v - vd) / v) * 100).toFixed(0)
    }
    return <>
        <div className="card-product">
            <div className='card-product-top'>
                <span>{desconto(props.preco_original, props.preco_desconto)}% OFF</span>
                <img src={props.imagem_url} alt={'imagem do tenis modelo '+props.marca} />
            </div>
            <div className='card-product-bot'>
        
                    <span>Tênis</span>
                    <span>{props.nome}</span>
               
                <span>
                    <span>${props.preco_original}</span>
                    ${props.preco_desconto}
                </span>
            </div>
        </div>
    </>
}