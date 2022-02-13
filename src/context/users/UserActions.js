import {
  CLEAR_USERS,
  GET_USERS_ERROR,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USER_ERROR,
  GET_USER_START,
  GET_USER_SUCCESS,
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

export const UserActions = {
  startLoading: (username) => ({
    type: GET_USER_START,
    payload: username,
  }),
  success: (user) => ({
    type: GET_USER_SUCCESS,
    payload: user,
  }),
  error: (message) => ({
    type: GET_USER_ERROR,
    payload: message,
  }),
};
