import Product from './Product';

const InventoryList = (props) => {
    return props.products.map(product => {
        return <Product />
    });
};

export default InventoryList;