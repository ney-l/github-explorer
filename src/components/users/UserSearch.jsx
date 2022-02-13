import { UserContext } from 'context/users/UserContext';
import { useState, useContext } from 'react';

export function UserSearch() {
  const [text, setText] = useState('');
  const { users, searchUsers, clearUsers } = useContext(UserContext);

  function isValid() {
    return !!text;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) {
      alert('Please enter something');
    } else {
      searchUsers(text);
    }
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
                placeholder="Search"
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
      {users.length > 0 && (
        <div>
          <button onClick={handleClear} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
