import { FETCH_BASKET, ADD_LINE_ITEM, REMOVE_LINE_ITEM, SUCCESS, FAILURE } from '../api'

export default (state = {}, action) => {
  switch(action.type) {
    case SUCCESS(FETCH_BASKET):
    case SUCCESS(ADD_LINE_ITEM):
    case SUCCESS(REMOVE_LINE_ITEM):
      return action.payload
    default:
      return state
  }
}
