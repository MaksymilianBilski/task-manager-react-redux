import { filtersReducer } from 'redux/filters/filtersReducer';
import { tasksReducer } from 'redux/tasks/tasksReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { tasks: tasksReducer, filters: filtersReducer },
});
