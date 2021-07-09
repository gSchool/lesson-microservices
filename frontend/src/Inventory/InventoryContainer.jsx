import React, { useState, useEffect } from 'react'
import InventoryList from './InventoryList'
import * as config from '../../config.yml'

const InventoryContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(config.apiGateway);
            const products = await response.json();
            setProducts(products);
        }
        getProducts();
    }, [])
    return (
        <>
            <InventoryList products={products} />
        </>
    )
}

export default InventoryContainer