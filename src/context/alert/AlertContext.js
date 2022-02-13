import { createContext, useReducer } from 'react';
import { AlertActions } from './AlertActions';
import { alertReducer } from './AlertReducer';

export const AlertContext = createContext();

export function AlertProvider({ children }) {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  function setAlert({ message, type }) {
    dispatch(AlertActions.setAlert({ message, type }));

    setTimeout(() => {
      dispatch(AlertActions.remove());
    }, 3000);
  }
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
