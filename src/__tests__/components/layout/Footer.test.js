import { render, screen } from '@testing-library/react';
import { Footer } from 'components/layout';

test('Footer shows current year', () => {
  render(<Footer />);

  const currentYear = new Date().getFullYear();
  expect(screen.getByText(`${currentYear}`)).toBeVisible();
});
