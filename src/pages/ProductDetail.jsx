import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCaurosel from '../components/ProductCaurosel/ProductCaurosel.jsx';
import { ProductListing } from '../components/ProductListing/ProductListing';

const ProductDetail = () => {
    const { id } = useParams(); // Captura o ID da URL

    return (
        <>
            <div>
                <ProductCaurosel productId={id} />
                <ProductListing columns={4} displayValue={4}/>
            </div>
        </>
    )
}

export default ProductDetail;