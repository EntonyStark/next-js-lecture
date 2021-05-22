import { MainHeader } from './main-header';

export const Layout = ({ children }) => (
  <>
    <MainHeader />
    <main>{children}</main>
  </>
);
