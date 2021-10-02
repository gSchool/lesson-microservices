import React from 'react'
import InventoryList from './InventoryList'
import config from '../config.json'
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { CardContent } from '@material-ui/core';

class InventoryContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [
                { "id": 1, "name": "Tool belt" },
                { "id": 2, "name": "Movie about Ants" }
            ]
        };
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
        return (
            <Card sx={{ padding: 10 }}>
                <CardHeader sx={{ padding: 10 }} title="Inventory" />
                <CardContent>
                    <Paper elevation={4}>
                        <InventoryList products={this.state.products} />
                    </Paper>
                </CardContent>
            </Card>
        )
    }
}

export default InventoryContainer