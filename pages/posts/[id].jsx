import { Layout } from 'components/layout';
import { PostContent } from 'components/posts/post-detail/post-content';

const fake = {
  title: 'Getting started with Nextjs',
  image: '/images/posts/getting-started/getting-started-nextjs.png',
  excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique cum, itaque aliquid porro nisi. ',
  date: new Date(),
  content: '# First post',
  id: 'getting-started',
};

export default function IndividualPostPage() {
  return (
    <Layout head={(
      <>
        <title>NextJS events</title>
        <meta name="description" content="Featured events" />
      </>
    )}
    >
      <PostContent title={fake.title} image={fake.image} content={fake.content} />
    </Layout>
  );
}
