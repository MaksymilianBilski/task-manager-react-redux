import { createAction } from '@reduxjs/toolkit';

export const setStatusFilter = createAction(
  'filters/setStatusFilter',
  filter => {
    return { payload: filter };
  }
);

// export const setStatusFilter = filter => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: filter,
//   };
// };
