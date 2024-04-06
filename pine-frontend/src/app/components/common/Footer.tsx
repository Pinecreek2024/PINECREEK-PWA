import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Pinecreek Restaurant & Farmstall. All
        rights reserved.
      </p>
      {/* Add more footer content as needed */}
    </footer>
  );
};

export default Footer;
