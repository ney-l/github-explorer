import { useEffect, useContext } from 'react';
import { Spinner } from 'components/layout/Spinner';
import { UserContext } from 'context/users/UserContext';
import { UserItem } from './UserItem';

export function UserResults() {
  const { users, isLoading, error, fetchUsers } = useContext(UserContext);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

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
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
