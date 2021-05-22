import classes from './event-content.module.css';

export const EventContent = ({ children }) => (
  <section className={classes.content}>
    {children}
  </section>
);
