import { Layout } from 'components/layout';
import { Hero } from 'components/home-page/hero';
import { FeaturedPosts } from 'components/home-page/featured-posts';

import { getAllFeaturedPosts } from 'utils/post-util';

export default function HomePage({ posts }) {
  return (
    <Layout head={(
      <>
        <title>Tony&apos;s blog</title>
        <meta name="description" content="Blog about everything" />
      </>
    )}
    >
      <Hero />
      <FeaturedPosts posts={posts} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllFeaturedPosts();
  return {
    props: {
      posts,
    },
    // revalidate: 1800, // seconds
  };
};
