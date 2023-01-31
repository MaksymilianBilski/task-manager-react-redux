import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { statusFilters } from 'redux/filters/constant';

export const initialState = {
  tasks: { items: [], isLoading: false, error: null },
  filters: {
    status: statusFilters.all,
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState.tasks,
  // reducers: {
  //   addTask: {
  //     reducer(state, action) {
  //       state.items.push(action.payload);
  //     },
  //     prepare(text) {
  //       return {
  //         payload: {
  //           text,
  //           id: nanoid(),
  //           completed: false,
  //         },
  //       };
  //     },
  //   },
  //   deleteTask(state, action) {
  //     const index = state.items.findIndex(task => task.id === action.payload);
  //     state.items.splice(index, 1);
  //   },
  //   toggleCompleted(state, action) {
  //     for (const task of state.items) {
  //       if (task.id === action.payload) {
  //         task.completed = !task.completed;
  //         break;
  //       }
  //     }
  //   },

  extraReducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleCompleted,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
