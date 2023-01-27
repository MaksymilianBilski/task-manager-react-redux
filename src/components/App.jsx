import { Layout } from './Layout/Layout';
import TaskForm from './TaskForm/TaskForm';
import { StatisticsBar } from './StatisticsBar/StatisticsBar';
import { TaskList } from './TaskList/TaskList';

export const App = () => {
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
        <StatisticsBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </div>
  );
};
