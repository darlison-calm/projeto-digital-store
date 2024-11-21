import { useState, useEffect } from 'react';
import axios from 'axios';

// Hook para buscar o produto
const useFetchProduct = (productId) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3000/products/${productId}`);
                setProduct(response.data); // Atualiza o estado do produto
            } catch (err) {
                setError('Erro ao carregar os dados do produto.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]); // Recarregar quando o productId mudar

    return { product, loading, error };
};

export default useFetchProduct;
