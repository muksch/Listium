import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import '../styles/Home.css';

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className="pages">
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-highlight">Check It</span> - Organize Your Projects
            </h1>
            <p className="hero-subtitle">A powerful project management tool built with React and Firebase. Organize, tag, and track your projects with ease.</p>
            <div className="hero-actions">
              {user ? (
                <Link to="/dashboard" className="btn btn-primary">
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link to="/signup" className="btn btn-primary">
                    Get Started
                  </Link>
                  <Link to="/login" className="btn btn-secondary">
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2>Powerful Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Project Management</h3>
              <p>Create, organize, and manage all your projects in one centralized location with a clean, intuitive interface.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏷️</div>
              <h3>Smart Tagging</h3>
              <p>Organize your projects with custom tags. Filter and search through your projects efficiently.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Built on Firebase for enterprise-grade security. Your data is encrypted and only accessible to you.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Real-Time Sync</h3>
              <p>Changes sync instantly across all your devices. Never worry about losing your work.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Seamlessly access your projects from any device with our fully responsive interface.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Lightning Fast</h3>
              <p>Built with modern React patterns for optimal performance and user experience.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Sign Up</h3>
              <p>Create a free account to get started managing your projects.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Create Projects</h3>
              <p>Add your projects with descriptions and organize them the way you like.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Add Tags</h3>
              <p>Create custom tags to categorize and filter your projects efficiently.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Stay Organized</h3>
              <p>Keep track of everything and boost your productivity with Check It.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to get organized?</h2>
          <p>Join thousands of users managing their projects efficiently</p>
          {!user && (
            <Link to="/signup" className="btn btn-primary btn-large">
              Start Free Today
            </Link>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
