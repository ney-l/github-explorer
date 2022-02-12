import { Spinner } from 'components/layout/Spinner';
import { useEffect, useState } from 'react';

export function UserResults() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();

    async function fetchUsers() {
      try {
        const response = await fetch(
          `https://${process.env.REACT_APP_API_URL}/users`,
          {
            headers: {
              Authorization: `token ${process.env.REACT_APP_API_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  }, [setError]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div>
        <h3>Oops, there was an error!</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <h3>{user.login}</h3>
      ))}
    </div>
  );
}
