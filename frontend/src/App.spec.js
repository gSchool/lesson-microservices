import App from './App';
import { shallow } from 'enzyme';
import HeaderBar from './HeaderBar';

test('renders learn react link', () => {
  var component = shallow(<App />);
  const headerBar = component.find(HeaderBar);
  expect(headerBar.length).toEqual(1); 
});
