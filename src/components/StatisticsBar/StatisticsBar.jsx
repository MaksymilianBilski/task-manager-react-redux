import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { TasksFilter } from 'components/TasksFilter/TasksFilter';
import css from './StatisticsBar.module.css';

const StatisticsBar = () => {
  return (
    <header>
      <section className={css.taskSection}>
        <h2>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.filterSection}>
        <h2>Filter by status:</h2>
        <TasksFilter />
      </section>
    </header>
  );
};

export { StatisticsBar };
