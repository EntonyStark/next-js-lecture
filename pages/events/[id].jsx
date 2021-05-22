import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { EventSummary } from 'components/event-detail/event-summary';
import { EventLogistics } from 'components/event-detail/event-logistics';
import { EventContent } from 'components/event-detail/event-content';
import { Layout } from 'components/layout';

import { getEventById } from 'dummy-data';

export default function EventsById() {
  const [event, setEvent] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      const currentEvent = getEventById(router.query.id);
      setEvent(currentEvent);
    }
  }, [router.query]);

  return (
    <Layout>
      {event ? (
        <>
          <EventSummary title={event.title} />
          <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
          />
          <EventContent>
            <p>{event.description}</p>
          </EventContent>
        </>
      ) : (
        <div>
          <p>No event found!</p>
        </div>
      )}
    </Layout>
  );
}
