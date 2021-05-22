import { useMemo } from 'react';
import { getHumanReadableDate } from 'utils/humanReadableDate';

import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import { LogisticsItem } from './logistics-item';

import classes from './event-logistics.module.css';

export const EventLogistics = ({
  date, address, image, imageAlt,
}) => {
  const humanReadableDate = useMemo(() => getHumanReadableDate(date), [date]);
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};
