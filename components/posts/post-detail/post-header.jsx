import Image from 'next/image';

import styles from './post-header.module.css';

export const PostHeader = ({ title, image }) => (
  <header className={styles.header}>
    <h1>{title}</h1>

    <Image src={image} alt={title} width={200} height={150} />
  </header>
);
