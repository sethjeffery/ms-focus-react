import { RSAA } from 'redux-api-middleware'

const BASE_URI = "http://localhost:3000";

export const REQUEST = (type) => type + '_REQUEST'
export const SUCCESS = (type) => type + '_SUCCESS'
export const FAILURE = (type) => type + '_FAILURE'


// Performs a request wrapped in a Redux-Thunk function for emitting actions.
//
// Examples:
//
//   import { get, post } from 'api'
//
//   const bootstrap = () => (
//     get({ type: 'BOOTSTRAP', endpoint: '/v1/bootstrap' })
//   )
//
//   const bootstrapAsync = () => {
//     dispatch({ type: 'BOOTSTRAP_ASYNC' })
//     return (dispatch, getState) => (
//       setTimeout(() => (
//         post({ type: 'BOOTSTRAP', endpoint: '/v1/bootstrap' })(dispatch, getState)
//       ), 1)
//     )
//   }
//
export const request = ({
  baseUri = BASE_URI,
  method = 'GET',               // GET, POST, PUT, DELETE, etc
  headers = {},                 // object list of headers to override
  type,                         // action name of this request
  endpoint,                     // API endpoint (starting with / )
  body,                         // json object data to send
}) => (
  {
    [RSAA]: {
      endpoint: baseUri + endpoint,
      types: [REQUEST(type), SUCCESS(type), FAILURE(type)],
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
      method
    }
  }
)

export const get = (args) =>  request({ ...args, method: 'GET' })
export const post = (args) => request({ ...args, method: 'POST' })

export default request
