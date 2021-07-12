import React, { useState, useEffect } from 'react'
import InventoryList from './InventoryList'
import config from '../config.yml'

const InventoryContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProductsAsync = async () => {
            const response = await fetch(config.apiGateway, + '/inventory');
            const products = await response.json();
            setProducts(products);
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