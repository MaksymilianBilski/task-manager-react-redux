import { useSelector } from 'react-redux';
import { tasksReducer } from 'redux/tasks/tasksReducer';
import { getStatusFilter } from 'redux/filters/filtersSelector';
import { Task } from 'components/Task/Task';
import { statusFilters } from 'redux/filters/constant';
import css from './TaskList.module.css';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks.items, statusFilter);
  console.log(visibleTasks, statusFilter);
  return (
    <ul className={css.taskList}>
      {visibleTasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export { TaskList };
