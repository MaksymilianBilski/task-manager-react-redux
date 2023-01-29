import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/tasks/tasksReducer';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState.filters,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
