import { createReducer } from '@reduxjs/toolkit';
import { statusFilters } from 'redux/filters/constant';
import { addTask, deleteTask, toggleCompleted } from './tasksActions';

export const initialState = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};

export const tasksReducer = createReducer(initialState.tasks, {
  [addTask]: (state, action) => {
    state.push(action.payload);
  },
  [deleteTask]: (state, action) => {
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },
  [toggleCompleted]: (state, action) => {
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
        break;
      }
    }
  },
});
