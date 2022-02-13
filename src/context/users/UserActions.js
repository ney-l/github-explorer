import {
  CLEAR_USERS,
  GET_USERS_ERROR,
  GET_USERS_START,
  GET_USERS_SUCCESS,
} from './UserActionTypes';

export const UserSearchActions = {
  startLoading: () => ({
    type: GET_USERS_START,
  }),
  success: (users) => ({
    type: GET_USERS_SUCCESS,
    payload: users,
  }),
  error: (errMessage) => ({
    type: GET_USERS_ERROR,
    payload: errMessage,
  }),
  clear: () => ({
    type: CLEAR_USERS,
  }),
};
