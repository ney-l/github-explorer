import { createContext } from 'react';
import { useAlert } from 'context/alert';

export const AlertContext = createContext();

export function AlertProvider({ children }) {
  const { alert, setAlert } = useAlert();

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
