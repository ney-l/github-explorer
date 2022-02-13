import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from 'context/users/UserContext';

export function User() {
  const { username } = useParams();
  const { getUser } = useContext(UserContext);

  useEffect(() => {
    getUser(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <div>
      <h1>User</h1>
    </div>
  );
}
