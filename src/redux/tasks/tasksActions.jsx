import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
});

export const deleteTask = createAction('tasks/deleteTask', taskId => {
  return {
    id: taskId,
  };
});

export const toggleCompleted = createAction('tasks/toggleCompleted', taskId => {
  return {
    payload: taskId,
  };
});
