import { createContext, useReducer } from 'react';

export const TagCollectionContext = createContext();

export const tagCollectionReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TAG_COLLECTION':
      return {
        tagCollection: action.payload,
      };
    default:
      return state;
  }
};

export const TagCollectionContextProvider = ({ children }) => {
  const [state, dispatchTagCollection] = useReducer(tagCollectionReducer, {
    tagCollection: '',
  });

  return <TagCollectionContext.Provider value={{ ...state, dispatchTagCollection }}>{children}</TagCollectionContext.Provider>;
};
