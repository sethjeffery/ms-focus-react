import { get, post } from './request'
import { RSAA } from 'redux-api-middleware'

describe('get', () => {
  it('returns a thunk', () => {
    expect(get({ type: 'TYPE', endpoint: '/path/to/api' })).toBeInstanceOf(Function)
  })

  it('generates a get-request action', () => {
    const dispatch = jest.fn();
    const action = {
      [RSAA]: {
        endpoint: 'http://localhost:3000/path/to/api',
        types: ['TYPE_REQUEST', 'TYPE_SUCCESS', 'TYPE_FAILURE'],
        headers: { 'Content-Type': 'application/json' },
        body: undefined,
        method: 'GET'
      }
    }
    get({ type: 'TYPE', endpoint: '/path/to/api' })(dispatch)
    expect(dispatch).toHaveBeenCalledWith(action)
  })
})

describe('post', () => {
  it('returns a thunk', () => {
    expect(post({ type: 'TYPE', endpoint: '/path/to/api' })).toBeInstanceOf(Function)
  })

  it('generates a post-request action', () => {
    const dispatch = jest.fn();
    const action = {
      [RSAA]: {
        endpoint: 'http://localhost:3000/path/to/api',
        types: ['TYPE_REQUEST', 'TYPE_SUCCESS', 'TYPE_FAILURE'],
        headers: { 'Content-Type': 'application/json' },
        body: undefined,
        method: 'POST'
      }
    }
    post({ type: 'TYPE', endpoint: '/path/to/api' })(dispatch)
    expect(dispatch).toHaveBeenCalledWith(action)
  })
})
