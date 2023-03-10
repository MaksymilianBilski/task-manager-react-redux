import { filtersReducer } from 'redux/filters/filtersSlice';
import { tasksReducer } from 'redux/tasks/tasksReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { tasks: tasksReducer, filters: filtersReducer },
});
