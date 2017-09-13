import { get, post } from './request'
import { RSAA } from 'redux-api-middleware'

describe('get', () => {
  it('generates a get-request action', () => {
    const action = {
      [RSAA]: {
        endpoint: 'http://localhost:3000/path/to/api',
        types: ['TYPE_REQUEST', 'TYPE_SUCCESS', 'TYPE_FAILURE'],
        headers: { 'Content-Type': 'application/json' },
        body: undefined,
        method: 'GET'
      }
    }
    expect(get({ type: 'TYPE', endpoint: '/path/to/api' })).toEqual(action)
  })
})

describe('post', () => {
  it('generates a post-request action', () => {
    const action = {
      [RSAA]: {
        endpoint: 'http://localhost:3000/path/to/api',
        types: ['TYPE_REQUEST', 'TYPE_SUCCESS', 'TYPE_FAILURE'],
        headers: { 'Content-Type': 'application/json' },
        body: undefined,
        method: 'POST'
      }
    }
    expect(post({ type: 'TYPE', endpoint: '/path/to/api' })).toEqual(action)
  })
})
