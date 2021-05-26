import {
  createContext, useContext, useEffect, useState,
} from 'react';

export const NotificationContext = createContext({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
});

export const NotificationContextProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState(null);

  useEffect(() => {
    if (activeNotification && activeNotification.status !== 'pending') {
      const timer = setTimeout(() => setActiveNotification(null), 3000);
      return () => clearTimeout(timer);
    }

    return false;
  }, [activeNotification]);

  const showNotificationHandler = (data) => setActiveNotification(data);
  const hideNotificationHandler = () => setActiveNotification(null);

  return (
    <NotificationContext.Provider value={{
      notification: activeNotification,
      showNotification: showNotificationHandler,
      hideNotification: hideNotificationHandler,
    }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const ctx = useContext(NotificationContext);

  return ctx;
};
