import { useMemo, useState } from "react";

export function useAlert() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const openAlert = (message, status, seconds) => {
    setMessage(message);
    setStatus(status);


    setTimeout(() => {
      setMessage('');
      setStatus('');
    }, seconds * 1000);
  };

  return useMemo(() => ({
    message,
    status,
    openAlert
  }), [
    message,
    status,
    openAlert
  ]);
};
