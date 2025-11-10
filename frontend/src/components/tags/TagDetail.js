import { useTagsContext } from '../../hooks/useTagsContext';
import { useProjectsContext } from '../../hooks/useProjectsContext';
import { db } from '../../firebase/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { getErrorMessage } from '../../utils/errorHandler';
import { useState } from 'react';

const TagDetail = ({ tag }) => {
  const url = window.location.href;
  const projectId = url.split('/project/')[1];
  const { dispatchTags } = useTagsContext();
  const { projects, dispatchProjects } = useProjectsContext();
  const project = projects.find((project) => project.id === projectId);
  const [error, setError] = useState(null);

  const removeTagHandle = async (filteredTag) => {
    try {
      const docRef = doc(db, 'tags', filteredTag.id);
      await deleteDoc(docRef);

      setError(null);
      dispatchTags({ type: 'DELETE_TAG', payload: { id: filteredTag.id } });
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
  };

  const asignTagHandler = async (tag) => {
    try {
      const docRef = doc(db, 'projects', projectId);
      const currentTags = project.projectTags || [];

      // Zkontroluj, jestli už tam tag není (porovnání podle id)
      const exists = currentTags.some((t) => t.id === tag.id);

      if (exists) {
        console.log('Tag už existuje, nebude přidán znovu');
        return;
      }

      const updatedTags = [...currentTags, tag];

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

      setError(null);
    } catch (err) {
      console.log('Error updating project tags:', err);
      setError(getErrorMessage(err.code));
    }
  };

  return (
    <div className="tag-details" style={{ background: tag.color }}>
      {projectId
        ? tag && (
            <h4
              onClick={() => {
                asignTagHandler(tag);
              }}
            >
              {tag.title}
            </h4>
          )
        : tag && <h4>{tag.title}</h4>}
      <span onClick={() => removeTagHandle(tag)} className="material-icons">
        close
      </span>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default TagDetail;
