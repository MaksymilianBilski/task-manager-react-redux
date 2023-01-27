import { setStatusFilter } from 'redux/filters/actions';
import { statusFilters } from 'redux/filters/constant';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from 'redux/filters/selector';
import { Button } from 'components/Button/Button';

const TasksFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};

export { TasksFilter };
