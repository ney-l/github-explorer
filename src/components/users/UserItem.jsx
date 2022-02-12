import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function UserItem({ user: { login: username, avatar_url: avatarUrl } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatarUrl} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{username}</h2>
          <Link
            to={`/users/${username}`}
            className="text-base-content text-opacity-40"
          >
            Visit Profile{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.defaultProps = {
  user: PropTypes.object.isRequired,
};
