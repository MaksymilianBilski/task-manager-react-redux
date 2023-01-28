import { createReducer } from '@reduxjs/toolkit';
import { initialState } from 'redux/tasks/tasksReducer';
import { setStatusFilter } from './filtersActions';

export const filtersReducer = createReducer(initialState.filters, {
  [setStatusFilter]: (state, action) => {
    state.status = action.payload;
  },
});

// export const filtersReducer = (state = initialState.filters, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };
