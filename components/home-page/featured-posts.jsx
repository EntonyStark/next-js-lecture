import { PostGrid } from 'components/posts/post-grid';

import styles from './featured-posts.module.css';

export const FeaturedPosts = ({ posts }) => (
  <section className={styles.latest}>
    <h2>Featured Posts</h2>

    <PostGrid posts={posts} />
  </section>
);
