import { UserResults } from 'components/users/UserResults';
import { UserSearch } from 'components/users/UserSearch';

export function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
}
