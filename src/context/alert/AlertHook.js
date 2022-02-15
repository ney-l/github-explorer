import { useReducer } from 'react';
import { AlertActions, alertReducer } from 'context/alert';

export function useAlert() {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  function setAlert({ message, type }) {
    dispatch(AlertActions.setAlert({ message, type }));

    setTimeout(() => {
      dispatch(AlertActions.remove());
    }, 3000);
  }
  return { alert: state, setAlert };
}
