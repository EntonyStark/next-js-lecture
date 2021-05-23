import Link from 'next/link';

import styles from './main-header.module.css';

export const MainHeader = () => (
  <header className={styles.header}>
    <div className={styles.logo}><Link href="/">Next events</Link></div>

    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href="/events">Browse all events</Link>
        </li>
      </ul>
    </nav>
  </header>
);
