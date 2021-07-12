import InventoryContainer from './InventoryContainer'
import InventoryList from './InventoryList';
import { shallow } from 'enzyme';

const products = [{ id: 1, name: 'test' }, { id: 1, name: 'test' }]

test("Renders a list of products", () => {
    let wrapper = shallow(<InventoryContainer products={products} />);
    const productComponents = wrapper.find(InventoryList);
    expect(productComponents.length).toEqual(1);
});