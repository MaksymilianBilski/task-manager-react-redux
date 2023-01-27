import { Button } from 'components/Button/Button';

const TaskForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="tasks to add"></input>
      <Button type="submit">confirm</Button>
    </form>
  );
};

export default TaskForm;
