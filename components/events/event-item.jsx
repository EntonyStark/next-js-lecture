import { useMemo } from 'react';
import Image from 'next/image';

import { Button } from 'components/button';
import DateIcon from 'components/icons/date-icon';
import AddressIcon from 'components/icons/address-icon';
import ArrowRightIcon from 'components/icons/arrow-right-icon';
import { getHumanReadableDate } from 'utils/humanReadableDate';

import styles from './event-item.module.css';

export const EventItem = ({
  title, image, date, location, id,
}) => {
  const humanReadableDate = useMemo(() => getHumanReadableDate(date), [date]);

  const address = useMemo(() => location.replace(', ', '\n'), [location]);

  return (
    <li className={styles.item}>
      <Image src={`/${image}`} alt={id} width={250} height={160} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{address}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button href={`/events/${id}`}>
            <span>
              Explore event
            </span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
