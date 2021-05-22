/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { Layout } from 'components/layout';
import { EventList } from 'components/events/event-list';
import { ResultsTitle } from 'components/events/results-title';
import { ErrorAlert } from 'components/error-alert/error-alert';

import { getFilteredEvents } from 'dummy-data';

export default function EventsSlug() {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (router.query.slug) {
      const year = +router.query.slug[0];
      const month = +router.query.slug[1];
      if (Number.isNaN(year) || Number.isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
        setError('Invalid Filter values!');
        return;
      }

      const currentEvent = getFilteredEvents({ year, month });
      setEvents(currentEvent);
      setError(null);
    }
  }, [router.query]);

  return (
    <Layout>
      {!router.query.slug ? (
        <p className="center">Loading ...</p>
      ) : error
        ? (
          <p className="center">{error}</p>
        ) : !events || events.length === 0
          ? (
            <ErrorAlert>No Events Found</ErrorAlert>
          ) : (
            <>
              <ResultsTitle date={events[0].date} />
              <EventList items={events} />
            </>
          )}
    </Layout>
  );
}
