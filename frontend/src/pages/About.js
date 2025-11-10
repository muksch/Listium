import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  return (
    <div className="pages">
      <div className="about-container">
        {/* Page Header */}
        <section className="about-header">
          <h1>About Check It</h1>
          <p>A React & Firebase showcase project demonstrating modern web development practices</p>
        </section>

        {/* Project Overview */}
        <section className="project-overview">
          <div className="overview-content">
            <h2>What is Check It?</h2>
            <p>Check It is a full-stack web application designed to showcase professional React development skills. Built with modern technologies and best practices, it demonstrates how to create a scalable, secure, and user-friendly project management tool.</p>
            <p>Whether you're managing personal projects, tracking work assignments, or organizing creative endeavors, Check It provides an intuitive platform to keep everything organized and accessible.</p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3>Frontend</h3>
              <ul>
                <li>
                  <strong>React</strong> - Modern UI library with hooks
                </li>
                <li>
                  <strong>React Router</strong> - Client-side routing
                </li>
                <li>
                  <strong>CSS3</strong> - Modern styling with animations
                </li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>Backend & Database</h3>
              <ul>
                <li>
                  <strong>Firebase</strong> - Real-time database
                </li>
                <li>
                  <strong>Firestore</strong> - Cloud document database
                </li>
                <li>
                  <strong>Firebase Auth</strong> - Authentication
                </li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>Development Tools</h3>
              <ul>
                <li>
                  <strong>Node.js</strong> - Runtime environment
                </li>
                <li>
                  <strong>npm</strong> - Package management
                </li>
                <li>
                  <strong>Git</strong> - Version control
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="key-features">
          <h2>Key Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <div className="feature-details">
                <h3>User Authentication</h3>
                <p>Secure authentication system using Firebase Auth with email verification, password reset functionality, and session management.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">02</div>
              <div className="feature-details">
                <h3>Context API State Management</h3>
                <p>Leverages React Context API for efficient state management across the application, demonstrating advanced React patterns and best practices.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">03</div>
              <div className="feature-details">
                <h3>Real-Time Database Synchronization</h3>
                <p>Seamless real-time updates using Firestore, ensuring data consistency across multiple sessions and devices.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">04</div>
              <div className="feature-details">
                <h3>Responsive Design</h3>
                <p>Fully responsive interface that adapts to all screen sizes using CSS Grid, Flexbox, and media queries for optimal user experience.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">05</div>
              <div className="feature-details">
                <h3>Custom Hooks</h3>
                <p>Custom React hooks for authentication, project management, and tags, demonstrating component logic reuse and clean code architecture.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">06</div>
              <div className="feature-details">
                <h3>Error Handling & Validation</h3>
                <p>Comprehensive error handling and form validation ensuring smooth user experience and data integrity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture & Code Quality */}
        <section className="architecture">
          <h2>Architecture & Best Practices</h2>
          <div className="architecture-grid">
            <div className="arch-card">
              <h3>Component Structure</h3>
              <p>
                Organized component hierarchy with separation of concerns:
                <ul>
                  <li>Common components (Header, Footer)</li>
                  <li>Feature-based components (Projects, Tags)</li>
                  <li>Page components for routing</li>
                </ul>
              </p>
            </div>
            <div className="arch-card">
              <h3>Custom Hooks</h3>
              <p>
                Reusable logic extracted into custom hooks:
                <ul>
                  <li>useAuthContext</li>
                  <li>useProjectsContext</li>
                  <li>useTagsContext</li>
                  <li>useLogin, useSignup, useLogout</li>
                </ul>
              </p>
            </div>
            <div className="arch-card">
              <h3>Security</h3>
              <p>
                Firebase security features:
                <ul>
                  <li>Protected routes with authentication</li>
                  <li>Firestore security rules</li>
                  <li>User-specific data isolation</li>
                  <li>Secure password handling</li>
                </ul>
              </p>
            </div>
            <div className="arch-card">
              <h3>Performance</h3>
              <p>
                Optimized for speed and efficiency:
                <ul>
                  <li>React hooks for efficient re-renders</li>
                  <li>Context API for state management</li>
                  <li>Lazy loading of components</li>
                  <li>Optimized CSS animations</li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        {/* Development Journey */}
        <section className="development-journey">
          <h2>Development Highlights</h2>
          <div className="journey-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot"></span>
              </div>
              <div className="timeline-content">
                <h3>React Fundamentals</h3>
                <p>Built with functional components and React Hooks, demonstrating modern React practices and patterns.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot"></span>
              </div>
              <div className="timeline-content">
                <h3>State Management</h3>
                <p>Implemented Context API for efficient global state management without external libraries like Redux.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot"></span>
              </div>
              <div className="timeline-content">
                <h3>Firebase Integration</h3>
                <p>Full Firebase integration including authentication, Firestore database, and real-time synchronization.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot"></span>
              </div>
              <div className="timeline-content">
                <h3>Responsive Design</h3>
                <p>CSS-based responsive design with custom animations and transitions for enhanced user experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Demonstrated */}
        <section className="skills-section">
          <h2>Skills Demonstrated</h2>
          <div className="skills-grid">
            <div className="skill-badge">React Hooks</div>
            <div className="skill-badge">Context API</div>
            <div className="skill-badge">React Router</div>
            <div className="skill-badge">Firebase</div>
            <div className="skill-badge">Firestore</div>
            <div className="skill-badge">Authentication</div>
            <div className="skill-badge">CSS3 & Animations</div>
            <div className="skill-badge">Responsive Design</div>
            <div className="skill-badge">Component Design</div>
            <div className="skill-badge">State Management</div>
            <div className="skill-badge">Custom Hooks</div>
            <div className="skill-badge">Form Handling</div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2>Explore the Application</h2>
          <p>Ready to see Check It in action? Sign up and start managing your projects today!</p>
          <Link to="/signup" className="btn btn-primary btn-large">
            Try Check It Now
          </Link>
        </section>

        {/* Repository Section */}
        <section className="repository-section">
          <h2>Source Code</h2>
          <p className="repo-description">This project is a demonstration of React and Firebase development skills. The codebase is well-structured, commented, and follows modern best practices for maintainability and scalability.</p>
          <div className="repo-stats">
            <div className="stat">
              <div className="stat-value">Frontend</div>
              <div className="stat-label">React, React Router, CSS3</div>
            </div>
            <div className="stat">
              <div className="stat-value">Backend</div>
              <div className="stat-label">Firebase, Firestore, Cloud Functions</div>
            </div>
            <div className="stat">
              <div className="stat-value">Deploy</div>
              <div className="stat-label">Firebase Hosting, GitHub</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
