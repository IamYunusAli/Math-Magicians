import renderer from 'react-test-renderer';
import Calculator from '../../pages/Calculator';

test('should match Caculator snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
