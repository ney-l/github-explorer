import { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from 'context/users/UserContext';
import { Spinner } from 'components/layout/Spinner';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { Stat } from 'components/users/Stat';
import { ProfileImage } from 'components/users/ProfileImage';
import { UserInfo } from 'components/users/UserInfo';
import { RepoList } from 'components/repos/RepoList';

export function User() {
  const { username } = useParams();
  const { getUser, isLoading, user, getUserRepos, repos } =
    useContext(UserContext);

  const userRepo = repos[username];

  useEffect(() => {
    getUser(username);

    if (userRepo) return;
    getUserRepos(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, userRepo]);

  if (isLoading) {
    return <Spinner />;
  }

  const {
    avatar_url: avatarUrl,
    name,
    followers,
    following,
    public_repos: publicRepos,
    public_gists: publicGists,
  } = user ?? {};

  return (
    <>
      <div className="w-full mx-auto lg lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <ProfileImage name={name} avatarUrl={avatarUrl} />

          <div className="col-span-2">
            <UserInfo user={user} />
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <Stat title="Followers" value={followers} Icon={FaUsers} />
          <Stat title="Following" value={following} Icon={FaUserFriends} />
          <Stat title="Public Repos" value={publicRepos} Icon={FaCodepen} />
          <Stat title="Public Gists" value={publicGists} Icon={FaStore} />
        </div>

        <RepoList repos={userRepo} />
      </div>
    </>
  );
}
