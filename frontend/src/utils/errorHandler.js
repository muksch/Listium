export const getErrorMessage = (errorCode) => {
  console.log(errorCode);
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'Email already in use';
    case 'auth/invalid-email':
      return 'Invalid email';
    case 'auth/operation-not-allowed':
      return 'Operation not allowed';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters';
    case 'auth/user-disabled':
      return 'User disabled';
    case 'auth/user-not-found':
      return 'User not found';
    case 'auth/wrong-password':
      return 'Wrong password';
    case 'permission-denied':
      return 'Permission denied';
    default:
      return 'An unknown error occurred';
  }
};
