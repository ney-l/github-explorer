import { render, screen } from '@testing-library/react';
import { Alert, ERROR } from 'components/layout';
import { AlertContext } from 'context';

test('it shows message', () => {
  const alert = { message: 'some message' };
  render(
    <AlertContext.Provider value={{ alert }}>
      <Alert />
    </AlertContext.Provider>
  );
  expect(screen.getByText(alert.message)).toBeVisible();
});

test('it shows message with error icon', () => {
  const alert = { type: ERROR, message: 'some message' };
  render(
    <AlertContext.Provider value={{ alert }}>
      <Alert />
    </AlertContext.Provider>
  );
  expect(screen.getByText(alert.message)).toBeVisible();
  expect(screen.getByTestId('error-icon')).toBeVisible();
});

test('renders nothing if alert data is not provided', () => {
  const { container } = render(
    <AlertContext.Provider value={{}}>
      <Alert />
    </AlertContext.Provider>
  );
  expect(container).toBeEmptyDOMElement();
});
