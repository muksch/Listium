import { collection, addDoc } from 'firebase/firestore';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useState } from 'react';
import { useProjectsContext } from '../../hooks/useProjectsContext';
import { db } from '../../firebase/firebase';
import { getErrorMessage } from '../../utils/errorHandler';

const ProjectForm = () => {
  const { user } = useAuthContext();
  const { dispatchProjects } = useProjectsContext();
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [error, setError] = useState(null);

  const createProject = document.querySelector('.create-project');
  const pages = document.querySelector('.page');

  const projectSaveHandle = async (e) => {
    e.preventDefault();

    const project = { projectTitle, projectDescription };

    try {
      const docRef = await addDoc(collection(db, 'projects'), {
        ...project,
        userId: user.uid,
      });

      setError(null);
      setProjectTitle('');
      setProjectDescription('');
      dispatchProjects({ type: 'CREATE_PROJECT', payload: { id: docRef.id, ...project } });

      createProject.classList.toggle('show');
      pages.classList.toggle('blurred');
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
  };

  const closeNewProjectHandle = () => {
    createProject.classList.toggle('show');
    pages.classList.toggle('blurred');
  };

  return (
    <>
      {user && (
        <form className="create-project" onSubmit={projectSaveHandle}>
          <span className="material-icons remove-project-button" onClick={() => closeNewProjectHandle()}>
            close
          </span>
          <h3>Add a New Project</h3>
          <input type="text" placeholder="Project name" onChange={(e) => setProjectTitle(e.target.value)} value={projectTitle} />
          {/* <textarea placeholder="Project description" onChange={(e) => setProjectDescription(e.target.value)} value={projectDescription}></textarea> */}
          <button type="submit">Save Project</button>
          {error && <div className="error">{error}</div>}
        </form>
      )}
    </>
  );
};

export default ProjectForm;
