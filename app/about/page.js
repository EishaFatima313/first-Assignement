import Link from 'next/link';

export default function page(){
    return (
        <div>
          <h1>About Eisha Fatime</h1>
          <p>Information about the company.</p>
          <nav>
            <Link href="/">Home</Link> | 
            <Link href="/contact">Contact Us</Link> |
            <Link href="/services">Our Services</Link>
          </nav>
        </div>
      );
}