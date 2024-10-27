// pages/services/app-development.js
import Link from 'next/link';

export default function page() {
  return (
    <div>
      <h1>services</h1>
      <p>Details about App Development services.</p>
      <Link href="/">Back to Home</Link>
      <Link href="/services/app">app</Link>
      <Link href="/services/web">web</Link>
    </div>
  );
}
