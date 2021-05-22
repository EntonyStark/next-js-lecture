import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts/23/32">post page</Link>
        </li>
        <li>
          <Link href="/portfolio/23">portfolio page</Link>
        </li>
      </ul>
    </div>
  );
}
