import Head from 'next/head';

import { Navigation } from './navigation';

export const Layout = ({ children, head }) => (
  <>
    <Head>
      {head}
    </Head>

    <Navigation />
    <main>{children}</main>
  </>
);
