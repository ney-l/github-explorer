import { REMOVE_ALERT, SET_ALERT } from './AlertActionTypes';

export function alertReducer(state, { type, payload }) {
  switch (type) {
    case SET_ALERT:
      return payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
}
