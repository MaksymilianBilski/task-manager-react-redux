import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from './Layout/Layout';
import TaskForm from './TaskForm/TaskForm';
import { StatisticsBar } from './StatisticsBar/StatisticsBar';
import { TaskList } from './TaskList/TaskList';
import { getTasks } from 'redux/tasks/tasksSelector';
import { fetchTasks } from 'redux/operation';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Layout>
        <div>
          {isLoading && <p>Loading tasks...</p>}
          {error && <p>{error}</p>}
          <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
        </div>
        <StatisticsBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </div>
  );
};
