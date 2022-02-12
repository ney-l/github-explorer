import { useState, createContext } from 'react';

export const UserContext = createContext();

const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchUsers() {
    try {
      const response = await fetch(`https://${API_URL}/users`, {
        headers: {
          Authorization: `token ${API_TOKEN}`,
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
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
