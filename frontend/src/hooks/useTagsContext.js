import { TagsContext } from '../context/TagsContext';
import { useContext } from 'react';

export const useTagsContext = () => {
  const context = useContext(TagsContext);

  if (!context) {
    throw Error('useTagsContext must be used inside an useTagsContextProvider');
  }

  return context;
};
