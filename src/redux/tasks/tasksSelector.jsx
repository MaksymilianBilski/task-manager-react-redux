export const getTasks = state => {
  console.log(state.tasks.items);
  return state.tasks;
};

export const getIsLoading = state => state.tasks.isLoading;

export const getError = state => state.tasks.error;
