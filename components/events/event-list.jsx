import { EventItem } from './event-item';

import styles from './event-list.module.css';

export const EventList = ({ items }) => (
  <ul className={styles.list}>
    {items.map((el) => <EventItem key={el.id} {...el} />)}
  </ul>
);
