import {
  CLEAR_USERS,
  GET_USERS_ERROR,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USER_ERROR,
  GET_USER_START,
  GET_USER_SUCCESS,
} from './UserActionTypes';

export function userReducer(state, { type, payload }) {
  switch (type) {
    case GET_USERS_START:
    case GET_USER_START:
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
    case GET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
