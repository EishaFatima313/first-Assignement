// import React from 'react'
import Link from 'next/link';


const page = () => {
    return (
        <>
            <div>This is Home page</div>
            <Link href="/">Home</Link> |
            <Link href="/contact">Contact Us</Link> |
            <Link href="/services">Our Services</Link>
        </>
    )
}

export default page