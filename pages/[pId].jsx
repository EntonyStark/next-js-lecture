import fs from 'fs/promises';
import path from 'path';

export default function About({ product }) {
  if (!product) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const json = await fs.readFile(path.join(process.cwd(), 'data', 'dummy-backend.json'));
  const { products } = JSON.parse(json);
  const product = products.find((el) => el.id === params.pId);

  if (!product) return { notFound: true };

  return {
    props: {
      product,
    },
    // revalidate: 10,
  };
};

// const json = await fs.readFile(path.join(process.cwd(), 'data', 'dummy-backend.json'));
// const { products } = JSON.parse(json);
export const getStaticPaths = async () => ({
  paths: [],
  fallback: true,
});
