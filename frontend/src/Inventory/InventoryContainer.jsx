import React from 'react'
import InventoryList from './InventoryList'
import config from '../config.json'
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Button, CardContent } from '@material-ui/core';

class InventoryContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [
                { "id": 1, "name": "Tool belt" },
                { "id": 2, "name": "Movie about Ants" }
            ],
            something: 'something',
            incrementer: 0
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

    doSomethingWithStateClicked() {
        this.setState({ something: 'something else', incrementer: this.state.incrementer + 1 }, () => console.log('logging state after callback: ', this.state.incrementer))
        console.log('logging state immediately after setState(): ', this.state.incrementer)
    }

    render() {
        return (
            <>
                <Card>
                    <CardHeader sx={{ margin: 10 }} title="Inventory" />
                    <CardContent>
                        <Paper elevation={4}>
                            <InventoryList products={this.state.products} />
                        </Paper>
                    </CardContent>
                </Card>
                <Button variant='contained' onClick={() => this.doSomethingWithStateClicked()}>Do Something with State</Button>
                <p>{`${this.state.something} ${this.state.incrementer}`}</p>
            </>
        )
    }
}

export default InventoryContainer