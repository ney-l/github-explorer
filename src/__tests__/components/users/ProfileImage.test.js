import { render, screen } from '@testing-library/react';
import { ProfileImage } from 'components/users';

test('renders profile image', () => {
  const user = {
    name: 'abc',
    avatarUrl: 'https://some-where.com/some-image.png',
  };
  render(<ProfileImage {...user} />);
  expect(screen.getByAltText(/user profile/i)).toHaveAttribute(
    'src',
    user.avatarUrl
  );
  expect(screen.getByText(user.name)).toBeInTheDocument();
});
