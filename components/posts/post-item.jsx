import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { getHumanReadableDate } from 'utils/humanReadableDate';
import styles from './post-item.module.css';

export const PostItem = ({
  title, image, excerpt, date, slug,
}) => {
  const humanReadableDate = useMemo(() => getHumanReadableDate(date), [date]);
  return (
    <li className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={styles.image}>
            <Image src={`/images/posts/${slug}/${image}`} alt={slug} width={300} height={200} layout="responsive" />
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
