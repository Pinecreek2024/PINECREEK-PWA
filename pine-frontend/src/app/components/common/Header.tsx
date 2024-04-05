// src/app/components/common/Header.tsx
import React from 'react';
import NavBar from './NavBar'; // Assuming NavBar is another component

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Pinecreek Restaurant & Farmstall</h1>
      <NavBar />
    </header>
  );
};

export default Header;
