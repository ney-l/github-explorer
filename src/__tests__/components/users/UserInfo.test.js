import { render, screen } from '@testing-library/react';
import { UserInfo } from 'components/users';

test('renders user info', () => {
  const user = {
    name: 'John Doe',
    type: 'User',
    hireable: true,
    bio: 'Something cool',
    htmlUrl: 'https://someplace.com',
    location: 'Somewhere',
    blog: 'https://some-blog.com',
    twitterUsername: 'something',
  };
  render(<UserInfo user={user} />);
  expect(screen.getByText(user.name)).toBeInTheDocument();
  expect(screen.getByText(user.type)).toBeInTheDocument();
  expect(screen.getByText(/hireable/i)).toBeInTheDocument();
  expect(screen.getByText(user.bio)).toBeInTheDocument();
  expect(screen.getByText(user.location)).toBeInTheDocument();
  expect(screen.getByText(user.twitterUsername)).toBeInTheDocument();
});

test('hides hireable badge if hireable is not provided', () => {
  const user = {
    name: 'John Doe',
    type: 'User',
    hireable: null,
    bio: 'Something cool',
    htmlUrl: 'someplace.com',
    location: 'Somewhere',
    blog: 'some-blog.com',
    twitterUsername: 'something',
  };
  render(<UserInfo user={user} />);
  expect(screen.queryByText(/hireable/i)).toBeNull();
});

test('shows link to visit GitHub Profile in a new tab', () => {
  const user = {
    name: 'John Doe',
    type: 'User',
    hireable: true,
    bio: 'Something cool',
    htmlUrl: 'someplace.com',
    location: 'Somewhere',
    blog: 'some-blog.com',
    twitterUsername: 'something',
  };
  render(<UserInfo user={user} />);
  const profileLink = screen.queryByText(/visit github profile/i);
  expect(profileLink).toHaveAttribute('href', user.htmlUrl);
  expect(profileLink).toHaveAttribute('target', '_blank');
  expect(profileLink).toHaveAttribute('rel', 'noreferrer');
});

test('adds `https://` to Website link', () => {
  const user = {
    name: 'John Doe',
    type: 'User',
    hireable: true,
    bio: 'Something cool',
    htmlUrl: 'someplace.com',
    location: 'Somewhere',
    blog: 'some-blog.com',
    twitterUsername: 'something',
  };
  render(<UserInfo user={user} />);
  expect(screen.queryByText(user.blog).getAttribute('href')).toBe(
    `https://${user.blog}`
  );
});

test('adds `https://twitter.com/` to Twitter username', () => {
  const user = {
    name: 'John Doe',
    type: 'User',
    hireable: true,
    bio: 'Something cool',
    htmlUrl: 'someplace.com',
    location: 'Somewhere',
    blog: 'some-blog.com',
    twitterUsername: 'something',
  };
  render(<UserInfo user={user} />);
  expect(screen.queryByText(user.twitterUsername).getAttribute('href')).toBe(
    `https://twitter.com/${user.twitterUsername}`
  );
});
