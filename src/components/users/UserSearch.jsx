import { useState } from 'react';
import PropTypes from 'prop-types';
import { ERROR } from 'components/layout';

export function UserSearch({ users, setAlert, searchUsers, clearUsers }) {
  const [text, setText] = useState('');

  const isValid = () => Boolean(text);

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      return setAlert({
        message: 'Please enter something',
        type: ERROR,
      });
    }

    searchUsers(text);
  }

  function handleClear() {
    setText('');
    clearUsers();
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Type something to search GitHub"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users?.length > 0 && (
        <div>
          <button onClick={handleClear} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

UserSearch.propTypes = {
  users: PropTypes.array,
  setAlert: PropTypes.func.isRequired,
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
};
