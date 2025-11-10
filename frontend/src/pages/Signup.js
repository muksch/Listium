import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import '../styles/Auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <div className="pages">
      <div className="auth-container">
        <form className="signup auth-form" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />

          <button disabled={isLoading} type="submit">
            <span>{isLoading ? 'Signing up...' : 'Sign Up'}</span>
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
