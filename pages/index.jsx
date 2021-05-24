import { EventList } from 'components/events/event-list';
import { Layout } from 'components/layout';
import { getFeaturedEvents } from 'utils/actions';
import { NewsletterRegistration } from 'components/inputs/newsletter-registration';

export default function HomePage({ events }) {
  return (
    <Layout head={(
      <>
        <title>NextJS events</title>
        <meta name="description" content="Featured events" />
      </>
    )}
    >
      <NewsletterRegistration />
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
