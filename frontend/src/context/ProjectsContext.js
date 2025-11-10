import { createContext, useReducer } from 'react';

export const ProjectsContext = createContext();

export const projectsReducer = (state, action) => {
  if (!state.projects || !Array.isArray(state.projects)) {
    state.projects = [];
  }
  switch (action.type) {
    case 'SET_PROJECTS':
      return {
        projects: action.payload,
      };
    case 'CREATE_PROJECT':
      return {
        projects: [...state.projects, action.payload],
      };
    case 'UPDATE_PROJECT':
      const updatedProjects = state.projects.map((p) => {
        if (p.id === action.payload.id) {
          return action.payload;
        } else {
          return p;
        }
      });
      return {
        projects: updatedProjects,
      };
    case 'DELETE_PROJECT':
      return {
        projects: state.projects.filter((t) => t.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const ProjectsContextProvider = ({ children }) => {
  const [state, dispatchProjects] = useReducer(projectsReducer, {
    projects: null,
  });

  return <ProjectsContext.Provider value={{ ...state, dispatchProjects }}>{children}</ProjectsContext.Provider>;
};
