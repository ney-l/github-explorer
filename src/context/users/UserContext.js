import { createContext } from 'react';
import { useSearchUsers } from 'context/users/UserHooks';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { state, searchUsers, clearUsers } = useSearchUsers();

  return (
    <UserContext.Provider
      value={{
        ...state,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
