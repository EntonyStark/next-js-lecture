import Image from 'next/image';

import styles from './post-header.module.css';

export const PostHeader = ({ title, image, slug }) => (
  <header className={styles.header}>
    <h1>{title}</h1>

    <Image src={`/images/posts/${slug}/${image}`} alt={title} width={200} height={150} />
  </header>
);
