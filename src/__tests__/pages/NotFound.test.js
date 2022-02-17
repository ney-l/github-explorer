import { render, screen } from '@testing-library/react';
import { NotFound } from 'pages';
import { MemoryRouter } from 'react-router-dom';

test('shows page not found message', () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );
  expect(screen.getByText(/page not found/i)).toBeVisible();
});

test('shows link to go back home', () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  expect(
    screen.getByRole('link', {
      name: /back to home/i,
    })
  ).toHaveAttribute('href', '/');
});
