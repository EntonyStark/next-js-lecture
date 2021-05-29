import { Layout } from 'components/layout';
import { PostContent } from 'components/posts/post-detail/post-content';
import { getSinglePost, getSlugs } from 'utils/post-util';

export default function IndividualPostPage({ post }) {
  return (
    <Layout head={(
      <>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </>
    )}
    >
      <PostContent title={post.title} image={post.image} content={post.content} slug={post.slug} />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const slugs = getSlugs();

  return {
    paths: slugs.map((el) => ({ params: { slug: el } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 600, // seconds
  };
};
