import { FETCH_PRODUCTS, SUCCESS, FAILURE } from '../api'

export default (state = [], action) => {
  switch(action.type) {
    case SUCCESS(FETCH_PRODUCTS):
      return action.payload
    default:
      return state
  }
}
