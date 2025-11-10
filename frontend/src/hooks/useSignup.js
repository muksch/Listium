import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase/firebase';
import { getErrorMessage } from '../utils/errorHandler';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    if (!email || !password) {
      setError('Email and password are required!');
      setIsLoading(false);
      return;
    }

    const auth = getAuth(app);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Aktualizovat Auth Context
      dispatch({ type: 'LOGIN', payload: { uid: user.uid, email: user.email } });
    } catch (err) {
      setError(getErrorMessage(err.code));
    }

    setIsLoading(false);
  };

  return { signup, isLoading, error, setIsLoading };
};
