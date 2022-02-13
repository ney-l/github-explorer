import { REMOVE_ALERT, SET_ALERT } from './AlertActionTypes';

export const AlertActions = {
  setAlert: ({ message, type }) => ({
    type: SET_ALERT,
    payload: { message, type },
  }),
  remove: () => ({
    type: REMOVE_ALERT,
  }),
};
