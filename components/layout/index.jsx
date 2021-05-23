import Head from 'next/head';

import { MainHeader } from './main-header';

export const Layout = ({ children, head }) => (
  <>
    <Head>
      {head}
    </Head>

    <MainHeader />
    <main>{children}</main>
  </>
);
