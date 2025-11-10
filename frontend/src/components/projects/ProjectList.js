import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useProjectsContext } from '../../hooks/useProjectsContext';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { getErrorMessage } from '../../utils/errorHandler';

const ProjectList = () => {
  const { projects, dispatchProjects } = useProjectsContext();
  const [error, setError] = useState(null);
  const removeProjectHandle = async (project) => {
    try {
      const docRef = doc(db, 'projects', project.id);
      await deleteDoc(docRef);

      setError(null);
      dispatchProjects({ type: 'DELETE_PROJECT', payload: { id: project.id } });
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
  };

  const openNewProjectHandle = () => {
    const createProject = document.querySelector('.create-project');
    const pages = document.querySelector('.page');
    createProject.classList.toggle('show');
    pages.classList.toggle('blurred');
  };

  return (
    <div className="project-list-wrap">
      <div className="projects-header">
        <h2>My projects</h2>
        <button id="new-project" onClick={() => openNewProjectHandle()}>
          <p>Add new project </p>
          <span className="material-icons plus">add</span>
        </button>
      </div>
      <div className="project-list">
        {projects &&
          projects.map((project) => (
            <div className="project" key={project.id}>
              <Link to={`/project/${project.id}`}>
                <div className="project-details">
                  <div className="overlay"></div>
                  <h3>{project.projectTitle}</h3>
                  {/* <p className="project-description">{project.projectDescription}</p> */}
                  <div className="project-tags tags">
                    {project.projectTags && project.projectTags.length > 0 ? (
                      project.projectTags.map((projectTag) => (
                        <div className="tag-details" style={{ background: projectTag.color }} key={projectTag.id}>
                          <h4>{projectTag.title}</h4>
                        </div>
                      ))
                    ) : (
                      <p>No tags yet!</p>
                    )}
                  </div>
                </div>
              </Link>
              <span onClick={() => removeProjectHandle(project)} className="material-icons remove-project-button">
                close
              </span>
            </div>
          ))}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default ProjectList;
