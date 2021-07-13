import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Product from './Product';

const InventoryList = (props) => {
    var products = props.products.map(product =>
        <ListItem key={product.id}>
            <Product name={product.name} />
        </ListItem>
    );
    return (
        <List component="nav" aria-label="main mailbox folders">
            {products}
        </List>
    );
};

export default InventoryList;