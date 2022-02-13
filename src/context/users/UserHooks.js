import { useReducer } from 'react';
import { UserActions, UserSearchActions } from './UserActions';
import * as Api from './UserApi';
import { userReducer } from './UserReducer';

const initialState = {
  users: [],
  user: {},
  isLoading: false,
  error: null,
};

export function useSearchUsers() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  async function searchUsers(text) {
    dispatch(UserSearchActions.startLoading());
    const { users, error } = await Api.fetchUsers(text);
    if (error) {
      return dispatch(UserSearchActions.error(error));
    }
    dispatch(UserSearchActions.success(users));
  }

  async function clearUsers() {
    dispatch(UserSearchActions.clear());
  }

  async function getUser(username) {
    dispatch(UserActions.startLoading());
    const { user, error } = await Api.getUser(username);
    if (error) {
      return dispatch(UserActions.error(error));
    }
    dispatch(UserActions.success(user));
  }

  return { state, searchUsers, clearUsers, getUser };
}
