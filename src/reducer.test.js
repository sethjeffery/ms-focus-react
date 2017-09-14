import reducer from './reducer';

it('combines reducers with defaults', () => {
  expect(reducer({}, {})).toEqual({ app: {}, products: [], basket: {} })
})
