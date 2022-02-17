import PropTypes from 'prop-types';
import { Spinner } from 'components/layout';
import { UserItem } from 'components/users';

export function UserResults({ isLoading, error, users }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div>
        <h3>Oops, there was an error!</h3>
        <p>
          Error: <span>{error}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

UserItem.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  users: PropTypes.array,
};
