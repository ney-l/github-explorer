import { useContext } from 'react';
import { AlertContext } from 'context/alert';

export const ERROR = 'ERROR';

export function Alert() {
  const { alert } = useContext(AlertContext);

  if (alert === null) {
    return null;
  }
  const { message, type } = alert ?? {};

  return (
    <p className="flex items-start mb-4 space-x-2">
      {type === ERROR && (
        <svg
          className="w-6 h-6 flex-none mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
          <path d="M8 8l8 8M16 8l-8 8" stroke="#B91C1C" strokeWidth="2"></path>
        </svg>
      )}
      <span className="flex-1 text-base font-semibold leading-7 text-white">
        <strong>{message}</strong>
      </span>
    </p>
  );
}
