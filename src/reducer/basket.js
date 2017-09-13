import { FETCH_BASKET, SUCCESS, FAILURE } from '../api'

export default (state = {}, action) => {
  switch(action.type) {
    case SUCCESS(FETCH_BASKET):
      return action.payload
    default:
      return state
  }
}
