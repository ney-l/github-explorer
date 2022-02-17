import { render, screen } from '@testing-library/react';
import { RepoItem } from 'components/repos';

const repo = {
  id: 1,
  name: 'repo 1',
  description: 'desc 1',
  htmlUrl: 'somelink.com',
  forks: 2,
  openIssues: 3,
  watchersCount: 4,
  stargazersCount: 5,
};

test('renders repo name and link', () => {
  render(<RepoItem repo={repo} />);
  const repoName = screen.getByText(repo.name);
  expect(repoName).toBeVisible();
  expect(repoName).toHaveAttribute('href', repo.htmlUrl);
  expect(repoName).toHaveAttribute('target', '_blank');
  expect(repoName).toHaveAttribute('rel', 'noreferrer');
});

test('renders description', () => {
  render(<RepoItem repo={repo} />);
  const description = screen.getByText(repo.description);
  expect(description).toBeVisible();
});

test('renders watchers count', () => {
  render(<RepoItem repo={repo} />);
  expect(screen.getByRole('img', { name: /watchers count/i })).toBeVisible();
  expect(screen.getByTestId('watchers-count')).toHaveTextContent(
    repo.watchersCount
  );
});

test('renders stargazers count', () => {
  render(<RepoItem repo={repo} />);
  expect(screen.getByRole('img', { name: /stargazers count/i })).toBeVisible();
  expect(screen.getByTestId('stargazers-count')).toHaveTextContent(
    repo.stargazersCount
  );
});

test('renders open issues count', () => {
  render(<RepoItem repo={repo} />);
  expect(screen.getByRole('img', { name: /open issues count/i })).toBeVisible();
  expect(screen.getByTestId('open-issues-count')).toHaveTextContent(
    repo.openIssues
  );
});

test('renders forks count', () => {
  render(<RepoItem repo={repo} />);
  expect(screen.getByRole('img', { name: /forks count/i })).toBeVisible();
  expect(screen.getByTestId('forks-count')).toHaveTextContent(repo.forks);
});
