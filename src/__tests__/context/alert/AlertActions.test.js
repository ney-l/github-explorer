const { AlertActions, SET_ALERT, REMOVE_ALERT } = require('context/alert');

test('sets alert with message', () => {
  const payload = {
    message: 'some message',
  };
  expect(AlertActions.setAlert(payload)).toEqual({
    type: SET_ALERT,
    payload,
  });
});

test('sets alert with message and type', () => {
  const payload = {
    message: 'some message',
    type: 'ERROR',
  };
  expect(AlertActions.setAlert(payload)).toEqual({
    type: SET_ALERT,
    payload,
  });
});

test('removes alert', () => {
  const payload = { type: REMOVE_ALERT };
  expect(AlertActions.remove(payload)).toEqual(payload);
});
