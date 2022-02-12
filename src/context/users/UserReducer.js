import {
  GET_USERS_ERROR,
  GET_USERS_START,
  GET_USERS_SUCCESS,
} from './UserActionTypes';

export function userReducer(state, { type, payload }) {
  switch (type) {
    case GET_USERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
      };

    case GET_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
}
