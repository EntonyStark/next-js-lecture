import Head from 'next/head';

import { Notification } from 'components/notification/notification';
import { useNotificationContext } from 'store/notification-context';
import { MainHeader } from './main-header';

export const Layout = ({ children, head }) => {
  const ctx = useNotificationContext();
  return (
    <>
      <Head>
        {head}
      </Head>

      <MainHeader />
      <main>{children}</main>
      {ctx.notification && (
        <Notification
          title={ctx.notification.title}
          status={ctx.notification.status}
          message={ctx.notification.message}
        />
      )}
    </>
  );
};
