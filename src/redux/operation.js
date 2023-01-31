import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './tasks/tasksReducer';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
  const response = await axios.get('/tasks');
  dispatch(fetchingSuccess(response.data));
  dispatch(fetchingError(e.message));
});
