import { EventSummary } from 'components/event-detail/event-summary';
import { EventLogistics } from 'components/event-detail/event-logistics';
import { EventContent } from 'components/event-detail/event-content';
import { Layout } from 'components/layout';

import { getEventById, getFeaturedEvents } from 'utils/actions';

export default function EventsById({ event }) {
  if (!event) {
    return (
      <div className="center">
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <Layout>
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
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const event = await getEventById(params.id);

  if (!event) return { notFound: true }; // if we don't have data

  return {
    props: {
      event,
    },
    revalidate: 30, // seconds
  };
};

export const getStaticPaths = async () => {
  const allEvents = await getFeaturedEvents();
  return {
    paths: allEvents.map((e) => ({ params: { id: e.id } })),
    fallback: true, // we can have a more pages than we have on pre-generated time
  };
};
