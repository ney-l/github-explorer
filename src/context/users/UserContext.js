import { useReducer, createContext } from 'react';
import { UserActions } from './UserActions';
import { userReducer } from './UserReducer';

export const UserContext = createContext();

const API_URL = process?.env?.REACT_APP_API_URL;
const API_TOKEN = process?.env?.REACT_APP_API_TOKEN;

export const UserProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  async function searchUsers(text) {
    try {
      dispatch(UserActions.startLoading());
      const params = new URLSearchParams({
        q: text,
      });

      const response = await fetch(
        `https://${API_URL}/search/users?${params}`,
        {
          headers: {
            Authorization: `token ${API_TOKEN}`,
          },
        }
      );
      const { items: users } = await response.json();
      dispatch(UserActions.success(users));
    } catch (err) {
      dispatch(UserActions.error(err));
      console.error(err);
    }
  }

  async function clearUsers() {
    dispatch(UserActions.clear());
  }

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
