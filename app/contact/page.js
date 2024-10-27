import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Contact information and form here.</p>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/about">About Us</Link> |
        <Link href="/services">Our Services</Link>
      </nav>
    </div>
  );
}