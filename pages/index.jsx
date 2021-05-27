import { Layout } from 'components/layout';
import { Hero } from 'components/home-page/hero';
import { FeaturedPosts } from 'components/home-page/featured-posts';

const arr = [
  {
    title: 'Getting started with Nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique cum, itaque aliquid porro nisi. ',
    date: new Date(),
    id: 'getting-started',
  },
];

export default function HomePage() {
  return (
    <Layout head={(
      <>
        <title>Tony&apos;s blog</title>
        <meta name="description" content="Blog about everything" />
      </>
    )}
    >
      <Hero />
      <FeaturedPosts posts={arr} />
    </Layout>
  );
}

// export const getStaticProps = async () => {
//   const events = await getFeaturedEvents();
//   return {
//     props: {
//       events,
//     },
//     revalidate: 1800, // seconds
//   };
// };
