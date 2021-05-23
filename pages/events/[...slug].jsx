/* eslint-disable max-len */

import { Layout } from 'components/layout';
import { EventList } from 'components/events/event-list';
import { ResultsTitle } from 'components/events/results-title';
import { ErrorAlert } from 'components/error-alert/error-alert';

import { getFilteredEvents } from 'utils/actions';

export default function EventsSlug({ currentEvents }) {
  if (currentEvents.length === 0) {
    return (
      <Layout>
        <ErrorAlert>No Events Found</ErrorAlert>
      </Layout>
    );
  }

  return (
    <Layout>
      <ResultsTitle date={currentEvents[0].date} />
      <EventList items={currentEvents} />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const year = +params.slug[0];
  const month = +params.slug[1];

  if (Number.isNaN(year) || Number.isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
    return {
      notFound: true, // if we don't have data
      // redirect: {
      //   destination: '/error'
      // }
    };
  }

  const currentEvents = await getFilteredEvents({ year, month });

  return {
    props: {
      currentEvents,
    },
  };
};
