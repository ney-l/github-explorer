import { useReducer } from 'react';
import { UserActions } from './UserActions';
import { fetchUsers } from './UserApi';
import { userReducer } from './UserReducer';

export function useSearchUsers() {
  const initialState = {
    users: [],
    user: {},
    isLoading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(userReducer, initialState);

  async function searchUsers(text) {
    dispatch(UserActions.startLoading());
    const { users, error } = await fetchUsers(text);
    if (error) {
      return dispatch(UserActions.error(error));
    }
    dispatch(UserActions.success(users));
  }

  async function clearUsers() {
    dispatch(UserActions.clear());
  }

  return { state, searchUsers, clearUsers };
}
