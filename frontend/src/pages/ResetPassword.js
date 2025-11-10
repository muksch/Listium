import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const auth = getAuth();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Check your email for a password reset link.');
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    } catch (err) {
      console.error(err);
      switch (err.code) {
        case 'auth/invalid-email':
          setError('Email is invalid.');
          break;
        case 'auth/user-not-found':
          setError('User was not found.');
          break;
        default:
          setError('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div className="pages">
      <div className="auth-container">
        <form onSubmit={handleResetPassword} className="login auth-form reset-password">
          <h3>Reset Password</h3>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type="submit">
            <span>Send Reset Link</span>
          </button>
          {message && <div className="message">{message}</div>}
          {error && <div className="error">{error}</div>}
          <p className="forgot-password">
            <Link to="/login">Back to Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
