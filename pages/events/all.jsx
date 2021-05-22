import { getAllEvents } from 'dummy-data';

import { EventList } from 'components/events/event-list';
import { Layout } from 'components/layout';
import { EventsSearch } from 'components/events/events-search';
import { useRouter } from 'next/router';

export default function EventsAll() {
  const allEvents = getAllEvents();

  const router = useRouter();

  const onSearch = (selectedYear, selectedMonth) => {
    router.push(`/events/${selectedYear}/${selectedMonth}`);
  };

  return (
    <Layout>
      <EventsSearch onSearch={onSearch} />
      <EventList items={allEvents} />
    </Layout>
  );
}
