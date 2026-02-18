import ContactHeader from './components/ContactHeader';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import { mockContactData } from './api/mockData';
import { useHeader } from './hooks/useHeader';

const Contact = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();

  if (isHeaderLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white pb-20">
      {headerData && <ContactHeader data={headerData} />}

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-16">
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
