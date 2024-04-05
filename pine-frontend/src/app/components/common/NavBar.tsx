// src/app/components/common/NavBar.tsx
import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <Link href="/"><a>Home</a></Link>
      <Link href="/menu"><a>Menu</a></Link>
      <Link href="/events"><a>Events</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
      {/* Add more links as needed */}
    </nav>
  );
};

export default NavBar;
