import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import useFetchProduct from './useFetchProduct';
import '@globalStyles/ColorsVariables.css'
import '../../globalStyles/reset.css'
import './ProductCaurosel.css';

function ProductCaurosel({ productId }) {
    const { product, loading, error } = useFetchProduct(productId); // Usando o hook
    const [activeIndex, setActiveIndex] = useState(0); // Gerenciar o slide ativo

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Produto não encontrado.</p>;

    const { name, mark, price, price_with_discount, colors, images } = product;
    const categName = product.categories[0].name;

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <div className="default">
        <div className='product-carousel-container'>
            <div className='product-carousel-top'>
                <p><strong>Home</strong> / Produtos / Tênis / {mark} / {name}</p>
            </div>
            <div className='product-carousel-bottom'>
                <div className="product-carousel-left">
                    {/* Carrossel com controles */}
                    <Carousel
                        activeIndex={activeIndex}
                        onSelect={handleSelect}
                        className="product-carousel"
                        indicators={false} // Remove indicadores padrão
                        controls={true} // Adiciona botões de navegação
                    >
                        {images.map((image, index) => (
                            <Carousel.Item key={index} className="product-carousel-item">
                                <div
                                    className="carousel-image"
                                    style={{ backgroundColor: colors[index % colors.length] }}
                                >
                                    <img
                                        src={image.path}
                                        alt={'imagem do tenis modelo ' + name}
                                        className="product-image"
                                    />
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    {/* Thumbnails como botões */}
                    <div className="thumbnail-container">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
                                style={{
                                    backgroundColor: colors[index % colors.length], // Ajustando cor
                                    borderColor: index === activeIndex ? 'var(--primary)' : 'transparent',
                                }}
                                onClick={() => handleSelect(index)} // Alterar o índice ativo
                            >
                                <img
                                    src={image.path}
                                    alt={'imagem do tenis modelo ' + name}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="product-carousel-right">
                    <h2>{name || 'Produto Padrão'}</h2>
                    <p className='carousel-info-product'>{categName} | {mark} | REF:38416711</p>
                    <div className="rating">
                        <span>4.5 ⭐ (90 avaliações)</span>
                    </div>
                    <div className="price">
                        <span className="current-price">R$ {price_with_discount || price}</span>
                        {price_with_discount && (
                            <span className="old-price">R$ {price}</span>
                        )}
                    </div>
                    <h4 className='h4-cor'>Descrição do produto</h4>
                    <p className="description">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'}</p>
                    <h4 className='h4-cor'>Tamanho</h4>
                    <div className='carousel-tamanho'>
                        <div className='tamanho-product'>39</div>
                        <div className='tamanho-product'>40</div>
                        <div className='tamanho-product'>41</div>
                        <div className='tamanho-product'>42</div>
                        <div className='tamanho-product'>43</div>
                    </div>
                    <h4 className='h4-cor'>Cor</h4>
                    <div className="colors">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className="color-swatch"
                                style={{ backgroundColor: color }}
                            ></div>
                        ))}
                    </div>
                    <Button variant="warning" className="buy-button">
                        COMPRAR
                    </Button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ProductCaurosel;