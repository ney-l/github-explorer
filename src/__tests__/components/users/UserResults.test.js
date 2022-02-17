import { render, screen } from '@testing-library/react';
import { UserResults } from 'components/users';
import { MemoryRouter } from 'react-router-dom';

test('Shows loading state', () => {
  render(<UserResults isLoading={true} />);
  expect(screen.getByAltText(/loading/i)).toBeVisible();
});

test('Shows Error', () => {
  const error = 'Some error';
  render(<UserResults error={error} />);
  expect(screen.getByText(error)).toBeVisible();
});

describe('Show Users', () => {
  const users = [
    { id: 1, login: 'user1', avatarUrl: 'https://test.com/user1.png' },
    { id: 2, login: 'user2', avatarUrl: 'https://test.com/user2.png' },
  ];

  test('Shows user names', () => {
    render(<UserResults users={users} isLoading={false} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByText(users[0].login)).toBeVisible();
    expect(screen.getByText(users[1].login)).toBeVisible();
  });

  test('Shows user avatars', () => {
    render(<UserResults users={users} isLoading={false} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByAltText(`${users[0].login}'s Profile`)).toHaveAttribute(
      'src',
      users[0].avatarUrl
    );
    expect(screen.getByAltText(`${users[1].login}'s Profile`)).toHaveAttribute(
      'src',
      users[1].avatarUrl
    );
  });
  test('Shows user page link', () => {
    render(<UserResults users={users} isLoading={false} />, {
      wrapper: MemoryRouter,
    });

    const profileLinks = screen.getAllByText(/visit profile/i);
    profileLinks.forEach((link, index) => {
      expect(link).toHaveAttribute('href', `/users/${users[index].login}`);
    });
  });
});
