import { useContext } from 'react';
import { UserContext, AlertContext } from 'context';
import { UserResults } from 'components/users/UserResults';
import { UserSearch } from 'components/users/UserSearch';

export function Home() {
  const { users, isLoading, error, searchUsers, clearUsers } =
    useContext(UserContext);

  const { setAlert } = useContext(AlertContext);

  return (
    <>
      <UserSearch
        users={users}
        searchUsers={searchUsers}
        clearUsers={clearUsers}
        setAlert={setAlert}
      />
      <UserResults users={users} isLoading={isLoading} error={error} />
    </>
  );
}
