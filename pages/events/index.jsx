import { useRouter } from 'next/router';

import { EventList } from 'components/events/event-list';
import { Layout } from 'components/layout';
import { EventsSearch } from 'components/events/events-search';

import { getAllEvents } from 'utils/actions';

export default function EventsAll({ events }) {
  const router = useRouter();

  const onSearch = (selectedYear, selectedMonth) => {
    router.push(`/events/${selectedYear}/${selectedMonth}`);
  };

  return (
    <Layout head={(
      <>
        <title>All NextJS events</title>
        <meta name="description" content="All events" />
      </>
    )}
    >
      <EventsSearch onSearch={onSearch} />
      <EventList items={events} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60, // seconds
  };
};
