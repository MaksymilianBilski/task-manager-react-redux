import { statusFilters } from 'components/redux/filters/constant';
import { useSelector } from 'react-redux';
import { Button } from 'components/Button/Button';

const TasksFilter = () => {
  const filter = useSelector(state => state.filter.status);

  return (
    <div>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};

export { TasksFilter };
