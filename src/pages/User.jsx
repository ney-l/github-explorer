import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from 'context/users/UserContext';
import { Spinner } from 'components/layout/Spinner';

export function User() {
  const { username } = useParams();
  const { getUser, isLoading } = useContext(UserContext);

  useEffect(() => {
    getUser(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  console.log(isLoading);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>User</h1>
    </div>
  );
}
