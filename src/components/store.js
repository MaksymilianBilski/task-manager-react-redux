import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { useSelector } from 'react-redux';

const appState = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
  filter: {
    status: 'all',
  },
};

const rootReducer = (state = appState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();

export default appState;
export const store = createStore(rootReducer, enhancer);
