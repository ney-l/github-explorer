import { useReducer } from 'react';
import { UserActions, UserRepoActions, UserSearchActions } from './UserActions';
import { Api, userReducer } from 'context/users';

export const initialState = {
  users: [],
  user: {},
  isLoading: false,
  error: null,
  repos: [],
};

export function useSearchUsers() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  async function searchUsers(text) {
    dispatch(UserSearchActions.startLoading());
    const { users, error } = await Api.fetchUsers(text);
    return error
      ? dispatch(UserSearchActions.error(error))
      : dispatch(UserSearchActions.success(users));
  }

  const clearUsers = () => dispatch(UserSearchActions.clear());

  async function getUser(username) {
    dispatch(UserActions.startLoading());
    const { user, error } = await Api.getUser(username);
    return error
      ? dispatch(UserActions.error(error))
      : dispatch(UserActions.success(user));
  }

  async function getUserRepos(username) {
    dispatch(UserRepoActions.startLoading());
    const { repos, error } = await Api.getRepos(username);
    return error
      ? dispatch(UserRepoActions.error(error))
      : dispatch(UserRepoActions.success(repos));
  }

  return { state, searchUsers, clearUsers, getUser, getUserRepos };
}
