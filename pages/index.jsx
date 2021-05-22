import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

export default function Home({ products }) {
  return (
    <ul>
      {products.map((el) => <li key={el.id}><Link href={`/${el.id}`}>{el.title}</Link></li>)}
    </ul>
  );
}

export const getStaticProps = async () => {
  console.log('(re) render...');
  const json = await fs.readFile(path.join(process.cwd(), 'data', 'dummy-backend.json'));
  const { products } = JSON.parse(json);
  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};
