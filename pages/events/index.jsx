import { getFeaturedEvents } from 'dummy-data';

import { EventList } from 'components/events/event-list';
import { Layout } from 'components/layout';

export default function Events() {
  const fEvents = getFeaturedEvents();
  return (
    <Layout>
      <EventList items={fEvents} />
    </Layout>
  );
}
