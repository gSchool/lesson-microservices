import InventoryList from './InventoryList'
import Product from './Product';
import { shallow } from 'enzyme';

const products = [{ id: 1, name: 'test' }, { id: 1, name: 'test' }]

test("Renders a list of products", () => {
    let wrapper = shallow(<InventoryList products={products} />);
    const productComponents = wrapper.find(Product);
    expect(productComponents.length).toEqual(products.length);
})