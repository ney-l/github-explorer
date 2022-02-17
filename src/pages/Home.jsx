import { useContext } from 'react';
import { UserContext } from 'context/users';
import { UserResults } from 'components/users/UserResults';
import { UserSearch } from 'components/users/UserSearch';

export function Home() {
  const { users, isLoading, error } = useContext(UserContext);

  return (
    <>
      <UserSearch />
      <UserResults users={users} isLoading={isLoading} error={error} />
    </>
  );
}
