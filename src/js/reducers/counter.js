import { INCREMENT_COUNTER, DECREMENT_COUNTER, TWICE_COUNTER } from '../actions/counter';

export default function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + 1;
  case DECREMENT_COUNTER:
    return state - 1;
  case TWICE_COUNTER:
    return state * 2;
  default:
    return state;
  }
}
