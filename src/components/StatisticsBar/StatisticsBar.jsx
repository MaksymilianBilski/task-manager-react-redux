import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import PropTypes from 'prop-types';

const StatisticsBar = () => {
  return (
    <header>
      <section>
        <h2>Tasks</h2>
        <TaskCounter />
      </section>
      <section>
        <h2>Filter by status:</h2>
      </section>
    </header>
  );
};

export { StatisticsBar };
