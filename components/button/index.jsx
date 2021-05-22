/* eslint-disable react/button-has-type */
import Link from 'next/link';

import styles from './button.module.css';

export const Button = ({
  children, onClick, href, type,
}) => (href ? (
  <Link href={href}>
    <a className={styles.btn}>
      {children}
    </a>
  </Link>
) : (
  <button type={type || 'button'} onClick={onClick} className={styles.btn}>{children}</button>
));
