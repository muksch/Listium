import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/common/Header';
import Project from './pages/ProjectPage';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import { useAuthContext } from './hooks/useAuthContext';
import { useProjectsContext } from './hooks/useProjectsContext';
import { db } from './firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useTagsContext } from './hooks/useTagsContext';

function App() {
  const { user, isAuthReady } = useAuthContext();
  const { dispatchProjects } = useProjectsContext();
  const { dispatchTags } = useTagsContext();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(collection(db, 'projects'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const projects = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatchProjects({ type: 'SET_PROJECTS', payload: projects });
      } catch (err) {
        console.error('Error getting documents:', err);
      }
    };

    if (user) {
      fetchProjects();
    }
  }, [dispatchProjects, user]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const q = query(collection(db, 'tags'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const tags = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatchTags({ type: 'SET_TAGS', payload: tags });
      } catch (err) {
        console.error('Error getting documents:', err);
      }
    };

    if (user) {
      fetchTags();
    }
  }, [dispatchTags, user]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          {isAuthReady && (
            <Routes>
              <Route path="/project/:projectId" element={user ? <Project /> : <Navigate to="/login" />} />
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
              <Route path="/reset-password" element={!user ? <ResetPassword /> : <Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
