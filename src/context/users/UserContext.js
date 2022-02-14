import { createContext } from 'react';
import { useSearchUsers } from 'context/users/UserHooks';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { state, searchUsers, clearUsers, getUser, getUserRepos } =
    useSearchUsers();

  return (
    <UserContext.Provider
      value={{
        ...state,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
