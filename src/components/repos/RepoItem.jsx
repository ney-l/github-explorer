import PropTypes from 'prop-types';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';

export function RepoItem({ repo }) {
  const {
    name,
    description,
    htmlUrl,
    forks,
    openIssues,
    watchersCount,
    stargazersCount,
  } = repo;
  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900 text-white">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a target="_blank" rel="noreferrer" href={htmlUrl}>
            <FaLink className="inline mr-1" />
            {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye role="img" aria-label="watchers count" className="mr-2" />{' '}
            <span data-testid="watchers-count">{watchersCount}</span>
          </div>
          <div className="mr-2 badge badge-success badge-lg">
            <FaStar role="img" aria-label="stargazers count" className="mr-2" />{' '}
            <span data-testid="stargazers-count">{stargazersCount}</span>
          </div>
          <div className="mr-2 badge badge-error badge-lg">
            <FaInfo
              role="img"
              aria-label="open issues count"
              className="mr-2"
            />{' '}
            <span data-testid="open-issues-count">{openIssues}</span>
          </div>
          <div className="mr-2 badge badge-warning badge-lg">
            <FaUtensils role="img" aria-label="forks count" className="mr-2" />{' '}
            <span data-testid="forks-count">{forks}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
