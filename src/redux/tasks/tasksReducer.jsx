import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTasks,
  addTask,
  deleteTask,
  toggleCompleted,
} from 'redux/operation';
import { statusFilters } from 'redux/filters/constant';

export const initialState = {
  tasks: { items: [], isLoading: false, error: null },
  filters: {
    status: statusFilters.all,
  },
};

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: initialState.tasks,
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

//   extraReducers: {
//     [fetchTasks.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchTasks.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchTasks.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState.tasks,
  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected]: handleRejected,
    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected]: handleRejected,
    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteTask.rejected]: handleRejected,
    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleCompleted.rejected]: handleRejected,
  },
});

export const tasksReducer = tasksSlice.reducer;
