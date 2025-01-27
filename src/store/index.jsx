import {
  createContext,
  useContext,
} from 'react';
import { useUser } from './hooks/user';
import { useAlert } from './hooks/alert';

export const store = createContext({
  user: {
    name: '',
    token: '',
    setUserData: (user) => {},
  },
  alert: {
    message: '',
    status: '',
    openAlert: (message, status, seconds) => {}
  },
});

const { Provider } = store;

export function StateProvider({ children }) {
  const user = useUser();
  const alert = useAlert();

  return (
    <Provider
      value={{
        user,
        alert,
      }}
    >{children}</Provider>
  );
};

export const useStore = () => useContext( store );
