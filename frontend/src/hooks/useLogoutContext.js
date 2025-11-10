import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../firebase/firebase';
import { getErrorMessage } from '../utils/errorHandler';

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = () => {
    setIsLoading(true);
    setError(null);

    const auth = getAuth(app);

    try {
      signOut(auth);

      // Aktualizovat Auth Context
      dispatch({ type: 'LOGOUT' });
    } catch (err) {
      setError(getErrorMessage(err.code));
    }

    setIsLoading(false);
  };

  return { logout, isLoading, error, setIsLoading };
};
