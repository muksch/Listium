import { useTagsContext } from '../../hooks/useTagsContext';
// import { useAuthContext } from '../../hooks/useAuthContext';

import TagDetail from './TagDetail';

const TagList = ({ tagCollection, setTagCollection }) => {
  const { tags } = useTagsContext();
  if (!tags) {
    return <div className="tags-list">Loading...</div>;
  }
  const filteredTags = tags.filter((tags) => tags.tagCollection === tagCollection);

  return (
    <div className="tags-list">
      <h2>Tags</h2>
      <div className="customSelect">
        <select name="taglistName" className="taglistName" value={tagCollection} onChange={(e) => setTagCollection(e.target.value)}>
          <option value="taglist1">Taglist name 1</option>
          <option value="taglist2">Taglist name 2</option>
          <option value="taglist3">Taglist name 3</option>
        </select>
        <span></span>
        <span></span>
      </div>
      {filteredTags && filteredTags.map((tag) => <TagDetail tag={tag} key={tag.id} />)}
    </div>
  );
};

export default TagList;
