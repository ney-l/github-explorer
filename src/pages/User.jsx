import { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from 'context/users/UserContext';
import { Spinner } from 'components/layout/Spinner';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';

export function User() {
  const { username } = useParams();
  const { getUser, isLoading, user } = useContext(UserContext);

  useEffect(() => {
    getUser(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  if (isLoading) {
    return <Spinner />;
  }

  const {
    avatar_url: avatarUrl,
    name,
    type,
    hireable,
    bio,
    html_url: htmlUrl,
    location,
    blog: website,
    twitter_username: twitterUsername,
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
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatarUrl} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>

              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={htmlUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="stat-value text-lg">{location}</div>
                </div>
              )}
              {website && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="stat-value text-lg">
                    <a
                      href={`https://${website}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {website}
                    </a>
                  </div>
                </div>
              )}
              {twitterUsername && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="stat-value text-lg">
                    <a
                      href={`https://twitter.com/${twitterUsername}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitterUsername}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {publicRepos}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {publicGists}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
