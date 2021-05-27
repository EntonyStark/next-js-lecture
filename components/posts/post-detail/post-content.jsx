import ReactMarkdown from 'react-markdown';

import { PostHeader } from './post-header';

import styles from './post-content.module.css';

export const PostContent = ({ title, image, content }) => (
  <article className={styles.content}>
    <PostHeader title={title} image={image} />

    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  </article>
);
