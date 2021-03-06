import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import { PostHeader } from './post-header';

import styles from './post-content.module.css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('css', css);

export const PostContent = ({
  title, image, content, slug,
}) => {
  const components = {
    // eslint-disable-next-line max-len
    // img: ({ alt, src }) => <Image src={`/images/posts/${slug}/${src}`} alt={alt} width={600} height={300} />,
    p: ({ node, children }) => {
      if (node.children[0].tagName === 'img') {
        const { properties } = node.children[0];
        return (
          <div className={styles.image}>
            <Image src={`/images/posts/${slug}/${properties.src}`} alt={properties.alt} width={600} height={300} />
          </div>
        );
      }

      return <p>{children}</p>;
    },
    code: ({ children, className }) => {
      const language = className.split('-')[1];
      return (
        <SyntaxHighlighter
          language={language}
          style={atomDark}
        >
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={image} slug={slug} />

      <ReactMarkdown components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
};
