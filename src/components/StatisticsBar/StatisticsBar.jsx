import { TaskCounter } from 'components/TaskCounter/TaskCounter';
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
      </section>
    </header>
  );
};

export { StatisticsBar };
