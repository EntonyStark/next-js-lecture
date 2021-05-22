import classes from './event-summary.module.css';

export const EventSummary = ({ title }) => (
  <section className={classes.summary}>
    <h1>{title}</h1>
  </section>
);
