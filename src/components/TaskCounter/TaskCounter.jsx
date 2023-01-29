import { useSelector } from 'react-redux';
import { tasksReducer } from 'redux/tasks/tasksReducer';
import { getTasks } from 'redux/tasks/tasksSelector';

const TaskCounter = () => {
  console.log(tasksReducer);
  const tasks = useSelector(getTasks);
  const result = tasks.reduce(
    (pv, task) => {
      if (task.completed) {
        pv.completed += 1;
      } else pv.active += 1;
      return pv;
    },

    { completed: 0, active: 0 }
  );

  return (
    <div>
      <p>Active: {result.active}</p>
      <p>Completed: {result.completed}</p>
    </div>
  );
};

export { TaskCounter };
