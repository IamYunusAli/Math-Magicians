import renderer from 'react-test-renderer';
import Home from '../../pages/Home';

test('should match Home snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
