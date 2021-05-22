import classes from './error-alert.module.css';

export const ErrorAlert = ({ children }) => <div className={classes.alert}>{children}</div>;
