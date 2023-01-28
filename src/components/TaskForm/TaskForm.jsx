import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/tasksActions';
import { Button } from 'components/Button/Button';

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="text" type="text" placeholder="tasks to add"></input>
      <Button type="submit">confirm</Button>
    </form>
  );
};

export default TaskForm;
