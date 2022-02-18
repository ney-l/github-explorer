import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { searchApiLimitError } from 'mocks/handlers';
import { server } from 'mocks/browser';
import { users } from 'mocks/data';
import { AlertProvider, UserProvider } from 'context';
import { Home } from 'pages';

test('On form submit, shows users', async () => {
  const searchTerm = 'something';
  render(
    <MemoryRouter>
      <UserProvider>
        <AlertProvider>
          <Home />
        </AlertProvider>
      </UserProvider>
    </MemoryRouter>
  );

  userEvent.type(screen.getByRole('textbox'), searchTerm);
  userEvent.click(screen.getByRole('button', { name: /go/i }));

  await screen.findByAltText(/loading/i);

  await screen.findByText(users[0].login);
  await screen.findByText(users[1].login);
});

test('shows error if api returns error', async () => {
  server.use(searchApiLimitError);
  const searchTerm = 'something';
  render(
    <MemoryRouter>
      <UserProvider>
        <AlertProvider>
          <Home />
        </AlertProvider>
      </UserProvider>
    </MemoryRouter>
  );

  userEvent.type(screen.getByRole('textbox'), searchTerm);
  userEvent.click(screen.getByRole('button', { name: /go/i }));
  await screen.findByText('Oops, there was an error!');
  await screen.findByText(/github api rate limit exceeded/i);
});
