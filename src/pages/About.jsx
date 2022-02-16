import { FaLink } from 'react-icons/fa';

export function About() {
  const repoLink = 'https://github.com/ney-l/github-explorer';
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Explorer</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is built by Neha Lanjewar, owner of
        <strong>
          <a href="https://fivepillarstech.com"> Five Pillars Tech</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version: <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Technologies Used:{' '}
        <span className="text-white">
          React, React Router Dom, Tailwind CSS, Daisy UI, GitHub REST API.
        </span>
      </p>
      <p className="text-lg text-gray-400">
        Code Repository:{' '}
        <a
          target="_blank"
          className="text-white"
          rel="noreferrer"
          href={repoLink}
        >
          <FaLink className="inline mr-1" />
          {repoLink}
        </a>
      </p>
    </div>
  );
}
