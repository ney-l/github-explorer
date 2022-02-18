import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from 'App';
import { AlertProvider, UserProvider } from 'context';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { repos, TEST_USER_ID, users } from 'mocks/data';
import { APP_NAME } from 'components/layout';

const renderWithProviders = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  const Wrapper = ({ children, ...props }) => (
    <UserProvider {...props}>
      <AlertProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </AlertProvider>
    </UserProvider>
  );

  return render(ui, { wrapper: Wrapper });
};

test('search users', async () => {
  renderWithProviders(<App />);

  userEvent.type(screen.getByRole('textbox'), TEST_USER_ID);
  userEvent.click(screen.getByRole('button', { name: /go/i }));

  await waitForElementToBeRemoved(() => screen.getByAltText(/loading/i));

  expect(screen.getByText(users[0].login)).toBeVisible();
  expect(screen.getByText(users[1].login)).toBeVisible();
});

test('visit user page', async () => {
  renderWithProviders(<App />);

  userEvent.type(screen.getByRole('textbox'), TEST_USER_ID);
  userEvent.click(screen.getByRole('button', { name: /go/i }));

  await waitForElementToBeRemoved(() => screen.getByAltText(/loading/i));

  const [firstUserCard] = await screen.findAllByText(/visit profile/i);

  userEvent.click(firstUserCard);
  expect(window.location.pathname).toBe(`/users/${TEST_USER_ID}`);

  const [firstNameOccurence] = await screen.findAllByText(users[0].name);
  expect(firstNameOccurence).toBeVisible();

  const firstRepo = await screen.findByText(repos[0].name);
  expect(firstRepo).toBeVisible();
});

test('navigates to about page', () => {
  renderWithProviders(<App />);

  userEvent.click(
    screen.getByRole('link', {
      name: /about/i,
    })
  );

  expect(window.location.pathname).toBe('/about');
});

test('navigates to home page', () => {
  renderWithProviders(<App />);

  userEvent.click(
    screen.getByRole('link', {
      name: /home/i,
    })
  );

  expect(window.location.pathname).toBe('/');
});

test('logo navigates to home page', () => {
  renderWithProviders(<App />);

  userEvent.click(
    screen.getByRole('img', {
      name: /logo/i,
    })
  );

  expect(window.location.pathname).toBe('/');
});

test('app name navigates to home page', () => {
  renderWithProviders(<App />);

  userEvent.click(screen.getByText(APP_NAME));

  expect(window.location.pathname).toBe('/');
});
