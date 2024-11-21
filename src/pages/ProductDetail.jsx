import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCaurosel from '../components/ProductCaurosel/ProductCaurosel.jsx';

const ProductDetail = () => {
    const { id } = useParams(); // Captura o ID da URL

    return (
        <>
            <div>
                <ProductCaurosel productId={id} />
            </div>
        </>
    )
}

export default ProductDetail;