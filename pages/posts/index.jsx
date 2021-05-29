import { Layout } from 'components/layout';

import { AllPosts } from 'components/posts/all-posts';
import { getAllPosts } from 'utils/post-util';

export default function AppPostsPage({ posts }) {
  return (
    <Layout head={(
      <>
        <title>All posts</title>
        <meta name="description" content="All post in the blog" />
      </>
    )}
    >
      <AllPosts posts={posts} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    // revalidate: 1800, // seconds
  };
};
