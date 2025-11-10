import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="pages">
      <div className="auth-container">
        <form className="login auth-form" onSubmit={handleSubmit}>
          <h3>Log In</h3>

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />

          <button disabled={isLoading} type="submit">
            <span>{isLoading ? 'Logging in...' : 'Log In'}</span>
          </button>
          <p className="forgot-password">
            <Link to="/reset-password">Forgot your password?</Link>
          </p>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
