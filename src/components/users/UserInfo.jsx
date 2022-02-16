import { Tile } from 'components/users';

export function UserInfo({ user }) {
  const {
    name,
    type,
    hireable,
    bio,
    htmlUrl,
    location,
    blog: website,
    twitterUsername,
  } = user ?? {};
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl card-title">
          {name}
          <div className="ml-2 mr-1 badge badge-success">{type}</div>
          {hireable && <div className="mx-1 badge badge-info">Hireable</div>}
        </h1>

        <p>{bio}</p>
        <div className="mt-4 card-actions">
          <a
            href={htmlUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>

      <div className="w-full rounded-lg shadow-md bg-base-100 stats">
        <Tile title="Location" value={location} />
        <Tile
          title="Website"
          value={website}
          externalLink={`https://${website}`}
        />
        <Tile
          title="Twitter"
          value={twitterUsername}
          externalLink={`https://twitter.com/${twitterUsername}`}
        />
      </div>
    </>
  );
}
