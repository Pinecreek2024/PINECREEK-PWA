// src/pages/index.tsx
import React from 'react';
import Layout from '@/components/layout/PageLayout'; // Assuming you have a layout component

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-10">Welcome to Pinecreek Restaurant & Farmstall</h1>
        {/* Content of your home page */}
      </div>
    </Layout>
  );
};

export default Home;
