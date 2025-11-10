import { useState } from 'react';
import TagList from './TagList';
import TagForm from './TagForm';

const Tags = () => {
  const [tagCollection, setTagCollection] = useState('');
  return (
    <aside className="tags">
      <TagList tagCollection={tagCollection} setTagCollection={setTagCollection} />
      <TagForm tagCollection={tagCollection} />
    </aside>
  );
};

export default Tags;
