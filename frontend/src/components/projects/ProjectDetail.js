import { useState } from 'react';
import { useProjectsContext } from '../../hooks/useProjectsContext';
import ProjectTags from '../tags/ProjectTags';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import { getErrorMessage } from '../../utils/errorHandler';

const ProjectDetailContent = ({ filteredProject }) => {
  const { dispatchProjects } = useProjectsContext();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const removeProjectHandle = async () => {
    try {
      const docRef = doc(db, 'projects', filteredProject.id);
      await deleteDoc(docRef);

      setError(null);
      dispatchProjects({ type: 'DELETE_PROJECT', payload: { id: filteredProject.id } });
      navigate('/dashboard');
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
  };

  return (
    <main className="projects-details single-project">
      {error && <div className="error">{error}</div>}
      <div className="projects-header">
        <Link to="/dashboard" id="back-to-projects">
          <span className="material-icons back" onClick={() => navigate(-1)}>
            chevron_left
          </span>
          <span className="back-description">Back to projects</span>
        </Link>
        <h2>{filteredProject.projectTitle}</h2>
        <button id="delete-project" onClick={removeProjectHandle}>
          <p>Delte project </p>
          <span className="material-icons plus">remove</span>
        </button>
      </div>
      {/* <p className="project-description">{filteredProject.projectDescription}</p> */}
      <div className="project-tags tags">
        {ProjectTags ? <ProjectTags project={filteredProject} key={filteredProject.id} /> : <p>No tags yet!</p>}
        {/* <ProjectTags project={filteredProject} key={filteredProject.id} /> */}
      </div>
    </main>
  );
};

const ProjectDetail = ({ project }) => {
  const { projects } = useProjectsContext();
  const { projectId } = useParams();

  const getProject = (id, projectsArr) => {
    let project;
    projectsArr ? (project = projectsArr.filter((p) => p.id === id)) : (project = []);
    return project[0];
  };

  const filteredProject = getProject(projectId, projects);
  console.log('filteredProject', filteredProject);

  return filteredProject && <ProjectDetailContent filteredProject={filteredProject} key={filteredProject.id} />;
};

export default ProjectDetail;
