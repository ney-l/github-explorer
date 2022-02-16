import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserItem } from 'components/users';

test('renders user info', () => {
  const user = {
    login: 'some_user',
    avatarUrl: 'https://somewhere/some-image.png',
  };

  const { debug } = render(<UserItem user={user} />, { wrapper: MemoryRouter });
  debug();
  expect(screen.getByAltText(/profile/i)).toHaveAttribute(
    'src',
    user.avatarUrl
  );
  expect(screen.getByText(user.login).innerHTML).toBe(user.login);
  expect(screen.getByText('Visit Profile')).toHaveAttribute(
    'href',
    `/users/${user.login}`
  );
});
