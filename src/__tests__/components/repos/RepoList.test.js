import { render, screen } from '@testing-library/react';
import { RepoList } from 'components/repos';

test('renders nothing if repos is not provided', () => {
  const { container } = render(<RepoList />);

  expect(container).toBeEmptyDOMElement();
});

test('renders repos', () => {
  const repos = [
    { id: 1, name: 'repo 1', description: 'desc 1' },
    { id: 2, name: 'repo 2', description: 'desc 2' },
  ];
  render(<RepoList repos={repos} />);
  expect(screen.getByText(repos[0].name)).toBeVisible();
  expect(screen.getByText(repos[0].description)).toBeVisible();

  expect(screen.getByText(repos[1].name)).toBeVisible();
  expect(screen.getByText(repos[1].description)).toBeVisible();
});
