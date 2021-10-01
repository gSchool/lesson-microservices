import React from 'react'
import InventoryList from './InventoryList'
import config from '../config.json'
import Container from '@material-ui/core/Container';

class InventoryContainer extends React.Component {
    constructor() {
        super()
        this.state = { products: [] };
    }
    async componentDidMount() {
        try {
            const response = await fetch(config.apiGateway + '/inventory');
            const products = await response?.json();

            if (!Array.isArray(products)) throw new Error('inventory must be an array');

            this.setState({ products: products });
        }
        catch (err) {
            console.error('failed to fetch inventory', err);
        }
    }

    render() {
        return <Container variant="" >
            <InventoryList products={this.state.products} />
        </Container>
    }
}

export default InventoryContainer