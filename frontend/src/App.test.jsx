import App from './App';
import HeaderBar from './HeaderBar';
import { shallow } from 'enzyme';

test('renders HeaderBar', () => {
  var wrapper = shallow(<App />);
  const headerBar = wrapper.find(HeaderBar);
  expect(headerBar.length).toEqual(1); 
});
