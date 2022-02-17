import { render, screen } from '@testing-library/react';
import { APP_NAME, Navbar } from 'components/layout';
import { MemoryRouter } from 'react-router-dom';

test('renders App name with link', () => {
  render(<Navbar />, { wrapper: MemoryRouter });

  const appNameElement = screen.getByRole('link', { name: APP_NAME });

  expect(appNameElement).toHaveAttribute('href', '/');
});

test('renders Home Link', () => {
  render(<Navbar />, { wrapper: MemoryRouter });

  const homeElement = screen.getByRole('link', { name: /home/i });

  expect(homeElement).toHaveAttribute('href', '/');
});

test('renders About Link', () => {
  render(<Navbar />, { wrapper: MemoryRouter });

  const aboutElement = screen.getByRole('link', { name: /about/i });

  expect(aboutElement).toHaveAttribute('href', '/about');
});

test('renders title', () => {
  const testTitle = 'something';
  render(<Navbar title={testTitle} />, { wrapper: MemoryRouter });
  expect(screen.getByRole('link', { name: testTitle })).toBeVisible();
});
