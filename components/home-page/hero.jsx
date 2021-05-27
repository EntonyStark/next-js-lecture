import Image from 'next/image';

import styles from './hero.module.css';

export const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.image}>
      <Image src="/images/site/37e695b267dba53ba83845d628ffa426.jpg" alt="Me" width={300} height={300} />
    </div>

    <h1>Hi, I am Tony</h1>

    <p>I blog about web development - especially frontend frameworks like Angular or React</p>
  </section>
);
