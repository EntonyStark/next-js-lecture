import { getFeaturedEvents } from 'utils/actions';

import { EventList } from 'components/events/event-list';
import { Layout } from 'components/layout';

export default function HomePage({ events }) {
  return (
    <Layout>
      <EventList items={events} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const events = await getFeaturedEvents();
  return {
    props: {
      events,
    },
    revalidate: 1800, // seconds
  };
};
