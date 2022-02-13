import { REMOVE_ALERT, SET_ALERT } from './AlertActionTypes';

export const AlertActions = {
  setAlert: (message) => ({
    type: SET_ALERT,
    payload: message,
  }),
  remove: () => ({
    type: REMOVE_ALERT,
  }),
};
