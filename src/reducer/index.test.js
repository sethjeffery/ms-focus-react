import reducer from './index';

it('combines reducers with defaults', () => {
  expect(reducer({}, {})).toEqual({ app: {}, products: [] })
})
