// src/pages/contact.tsx
import React from 'react';
import ContactForm from '@/components/forms/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold my-4">Contact Us</h2>
      <ContactForm />
      {/* Additional information for contacting the restaurant */}
    </div>
  );
};

export default ContactPage;
