import styles from './posts-grid.module.css';

import { PostItem } from './post-item';

export const PostGrid = ({ posts }) => (
  <ul className={styles.grid}>{posts.map((el) => <PostItem key={el.slug} {...el} />)}</ul>
);
