import { Layout } from 'components/layout';

import { AllPosts } from 'components/posts/all-posts';

const arr = [
  {
    title: 'Getting started with Nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique cum, itaque aliquid porro nisi. ',
    date: new Date(),
    id: 'getting-started',
  },
];

export default function AppPostsPage() {
  return (
    <Layout head={(
      <>
        <title>NextJS events</title>
        <meta name="description" content="Featured events" />
      </>
    )}
    >
      <AllPosts posts={arr} />
    </Layout>
  );
}
