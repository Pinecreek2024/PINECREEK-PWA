// src/app/components/forms/ContactForm.tsx
import React from 'react';
import useForm from '@/components/hooks/useForm';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const initialValues: ContactFormValues = { name: '', email: '', message: '' };
  const { values, handleChange, handleSubmit } = useForm<ContactFormValues>(initialValues);

  const submitForm = () => {
    // Handle form submission logic here (e.g., sending data to an API)
    console.log('Form Submitted:', values);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="contact-form">
      <div>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={values.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={values.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          value={values.message} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
