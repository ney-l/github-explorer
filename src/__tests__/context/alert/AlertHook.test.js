import { renderHook, act } from '@testing-library/react-hooks';
import { ERROR } from 'components/layout';
import { useAlert } from 'context/alert';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  // It's important to also call runOnlyPendingTimers before switching to real timers. This will ensure you flush all the pending timers before you switch to real timers. If you don't progress the timers and just switch to real timers, the scheduled tasks won't get executed and you'll get an unexpected behavior. This is mostly important for 3rd parties that schedule tasks without you being aware of it.
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

test('initial state', () => {
  const { result } = renderHook(useAlert);

  const { alert, setAlert } = result.current;
  expect(alert).toBeNull();
  expect(typeof setAlert).toBe('function');

  // this is needed to flush out the setTimeout
  // that is automatically set up by calling `setAlert()`
  act(() => jest.runOnlyPendingTimers());
});

test('update alert', () => {
  const alertMessage = {
    message: 'some message',
  };
  const { result } = renderHook(useAlert);
  act(() => result.current.setAlert(alertMessage));

  expect(result.current.alert).toEqual({
    message: alertMessage.message,
    type: undefined,
  });
  // this is needed to flush out the setTimeout
  // that is automatically set up by calling `setAlert()`
  act(() => jest.runOnlyPendingTimers());
});

test('removes alert after setting it', () => {
  const alertMessage = {
    message: 'some message',
    type: ERROR,
  };
  const { result } = renderHook(useAlert);

  act(() => result.current.setAlert(alertMessage));

  expect(result.current.alert).toEqual(alertMessage);

  // this is needed to flush out the setTimeout
  // that is automatically set up by calling `setAlert()`
  act(() => jest.runOnlyPendingTimers());

  expect(result.current.alert).toBeNull();
});
