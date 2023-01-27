export const setStatusFilter = filter => {
  return {
    type: 'filters/setStatusFilter',
    payload: filter,
  };
};
