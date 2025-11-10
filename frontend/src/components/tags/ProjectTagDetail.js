import { useProjectsContext } from '../../hooks/useProjectsContext';
import { db } from '../../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const ProjectTagDetail = ({ project, projectTag }) => {
  const { dispatchProjects } = useProjectsContext();
  const removeTagHandle = async (id) => {
    const docRef = doc(db, 'projects', project.id);
    const projectTags = project.projectTags || [];
    const tagToRemove = projectTags.find((tag) => tag.id === id);
    if (!tagToRemove) {
      console.error('Tag not found in project tags');
      return;
    }
    const updatedTags = projectTags.filter((tag) => tag.id !== id);
    try {
      await updateDoc(docRef, {
        projectTags: updatedTags,
      });
      dispatchProjects({
        type: 'UPDATE_PROJECT',
        payload: {
          ...project,
          projectTags: updatedTags,
        },
      });
    } catch (error) {
      console.error('Error removing tag from project:', error);
    }
  };
  return (
    <div className="project-tag-detail">
      <div className="tag-details" style={{ background: projectTag.color }}>
        <h4>{projectTag.title}</h4>
        <span onClick={() => removeTagHandle(projectTag.id)} className="material-icons">
          close
        </span>
      </div>
    </div>
  );
};

export default ProjectTagDetail;
