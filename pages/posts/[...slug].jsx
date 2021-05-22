import { useRouter } from 'next/router';

export default function Blog() {
  const router = useRouter();
  console.log('router', router.query);
  return (
    <div>
      <h1>Blog page</h1>
    </div>
  );
}
