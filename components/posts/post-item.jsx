import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { getHumanReadableDate } from 'utils/humanReadableDate';
import styles from './post-item.module.css';

export const PostItem = ({
  title, image, excerpt, date, id,
}) => {
  const humanReadableDate = useMemo(() => getHumanReadableDate(date), [date]);
  return (
    <li className={styles.post}>
      <Link href={`/posts/${id}`}>
        <a>
          <div className={styles.image}>
            <Image src={`/images/posts/${id}/${image}`} alt={id} width={300} height={200} layout="responsive" />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{humanReadableDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};
