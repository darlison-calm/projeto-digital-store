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

    const { name, description, price, price_with_discount, colors, backgrounds, images } = product;

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex); // Atualizar índice ativo no carrossel
    };

    return (
        <div className="product-carousel-container">
            <div className="product-carousel-left">
                {/* Carrossel com controles */}
                <Carousel
                    activeIndex={activeIndex}
                    onSelect={handleSelect}
                    className="product-carousel"
                    indicators={false} // Remove indicadores padrão
                    controls={true} // Adiciona botões de navegação
                >
                    {backgrounds.map((bgColor, index) => (
                        <Carousel.Item key={index} className="product-carousel-item">
                            <div
                                className="carousel-image"
                                style={{ backgroundColor: bgColor }}
                            >
                                <img
                                    src={product.images[0].path}
                                    alt={'imagem do tenis modelo '+ product.mark}
                                    className="product-image"
                                />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>

                {/* Thumbnails como botões */}
                <div className="thumbnail-container">
                    {backgrounds.map((bgColor, index) => (
                        <div
                            key={index}
                            className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
                            style={{
                                backgroundColor: bgColor,
                                borderColor: index === activeIndex ? 'var(--primary)' : 'transparent',
                            }}
                            onClick={() => handleSelect(index)} // Alterar o índice ativo
                        >
                            <img
                                src={product.images[0].path}
                                alt={'imagem do tenis modelo '+ product.mark}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="product-carousel-right">
                <h2>{name || 'Produto Padrão'}</h2>
                <p>Casual | REF: {product.slug || '00000'}</p>
                <div className="rating">
                    <span>4.5 ⭐ (90 avaliações)</span>
                </div>
                <div className="price">
                    <span className="current-price">R$ {price_with_discount || price}</span>
                    {price_with_discount && (
                        <span className="old-price">R$ {price}</span>
                    )}
                </div>
                <p className="description">{description || 'Sem descrição disponível.'}</p>
                <h4>Cor</h4>
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
    );
}

export default ProductCaurosel;