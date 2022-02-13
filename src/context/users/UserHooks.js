import { useReducer } from 'react';
import { UserSearchActions } from './UserActions';
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
    dispatch(UserSearchActions.startLoading());
    const { users, error } = await fetchUsers(text);
    if (error) {
      return dispatch(UserSearchActions.error(error));
    }
    dispatch(UserSearchActions.success(users));
  }

  async function clearUsers() {
    dispatch(UserSearchActions.clear());
  }

  return { state, searchUsers, clearUsers };
}
