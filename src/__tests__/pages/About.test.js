import { render, screen } from '@testing-library/react';
import { APP_NAME } from 'components/layout';
import { About } from 'pages';

test('renders app name', () => {
  render(<About />);

  expect(screen.getByText(APP_NAME)).toBeVisible();
  expect(screen.getByText(/version/i)).toBeVisible();
  expect(screen.getByText(/technologies used/i)).toBeVisible();
  expect(screen.getByText(/best practices/i)).toBeVisible();
});
