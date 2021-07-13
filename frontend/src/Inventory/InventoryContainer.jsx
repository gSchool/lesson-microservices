import React, { useState, useEffect } from 'react'
import InventoryList from './InventoryList'
import config from '../config.json'

const InventoryContainer = () => {
    console.log('config', config);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProductsAsync = async () => {
            try {
                const response = await fetch(config.apiGateway + '/inventory');
                console.log('response from /inventory', response);
                const products = await response?.json();
                console.log('json from /inventory', products);

                if (!Array.isArray(products)) throw new Error('inventory must be an array');

                setProducts(products);
            }
            catch (err) {
                console.error('failed to fetch inventory', err);
            }
        }
        getProductsAsync();
    }, [])
    return (
        <>
            <InventoryList products={products} />
        </>
    )
}

export default InventoryContainer