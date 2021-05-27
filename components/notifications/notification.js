/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import ReactDOM from 'react-dom';

import classes from './notification.module.css';

export const Notification = ({
  title, message, status, removeNotification,
}) => {
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses} onClick={removeNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications'),
  );
};
