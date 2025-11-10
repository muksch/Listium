import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase/firebase';
import { getErrorMessage } from '../utils/errorHandler';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    if (!email || !password) {
      setError('Email and password are required!');
      setIsLoading(false);
      return;
    }

    const auth = getAuth(app);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Aktualizovat Auth Context
      dispatch({ type: 'LOGIN', payload: { uid: user.uid, email: user.email } });
    } catch (err) {
      setError(getErrorMessage(err.code));
    }

    setIsLoading(false);
  };

  return { login, isLoading, error, setIsLoading };
};
