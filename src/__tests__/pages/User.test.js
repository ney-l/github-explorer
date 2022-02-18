import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { MemoryRouter, useParams } from 'react-router-dom';
import { AlertProvider, UserProvider } from 'context';
import { User } from 'pages';
import { repos, TEST_USER_ID, user } from 'mocks/data';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

beforeEach(() => {
  jest.resetModules();
});

test('shows user info and repos', async () => {
  useParams.mockReturnValue({
    username: TEST_USER_ID,
  });
  render(
    <MemoryRouter>
      <UserProvider>
        <AlertProvider>
          <User />
        </AlertProvider>
      </UserProvider>
    </MemoryRouter>
  );

  await waitForElementToBeRemoved(() => screen.getByAltText(/loading/i));

  await screen.findByText(/visit github profile/i);

  const username = await screen.findByTestId('name');
  expect(username).toHaveTextContent(user.name);
  const repo1 = await screen.findByText(repos[0].name);
  const repo2 = await screen.findByText(repos[1].name);
  expect(repo1).toBeVisible();
  expect(repo2).toBeVisible();
});