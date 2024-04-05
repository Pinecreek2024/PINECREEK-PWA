import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <Link href="/"><span>Home</span></Link>
      <Link href="/menu"><span>Menu</span></Link>
      <Link href="/events"><span>Events</span></Link>
      <Link href="/contact"><span>Contact</span></Link>
      {/* Add more links as needed */}
    </nav>
  );
};

export default NavBar;
