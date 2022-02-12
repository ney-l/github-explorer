import { useReducer, createContext } from 'react';
import { GET_USERS_ERROR, GET_USERS_SUCCESS } from './UserActionTypes';
import { userReducer } from './UserReducer';

export const UserContext = createContext();

const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const UserProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);
  const { users, isLoading, error } = state;

  async function fetchUsers() {
    try {
      const response = await fetch(`https://${API_URL}/users`, {
        headers: {
          Authorization: `token ${API_TOKEN}`,
        },
      });
      const data = await response.json();
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: GET_USERS_ERROR,
        payload: err.message,
      });
      console.error(err);
    }
  }

  return (
    <UserContext.Provider
      value={{
        users,
        isLoading,
        error,
        fetchUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
