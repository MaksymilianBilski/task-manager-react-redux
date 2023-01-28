import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/tasks/tasksActions';
import css from './Task.module.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    return dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };

  return (
    <div>
      <input onChange={handleToggle} type="checkbox" checked={task.completed} />
      <p className={css.taskText}>{task.text}</p>
      <button onClick={handleDelete}>x close</button>
    </div>
  );
};

export { Task };
