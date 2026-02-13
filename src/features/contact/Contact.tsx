import React from 'react';
import ContactHeader from './components/ContactHeader';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import { mockContactData } from './api/mockData';

const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-20">
      <ContactHeader data={mockContactData.header} />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-1/2">
            <ContactInfo data={mockContactData.info} />
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
