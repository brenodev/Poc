import {
  INCREMENT,
  DECREMENT
} from '../actions/simpleAction'

const initialValue = {
  counter: 1
}

export default function counterReducer (state = initialValue, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      }
    case DECREMENT:
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
}
