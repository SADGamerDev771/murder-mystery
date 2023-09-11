import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Simple Murder Mystery</h1>
      <Link href="/start">
        <button className="button">Start</button>
      </Link>
    </div>
  );
}
