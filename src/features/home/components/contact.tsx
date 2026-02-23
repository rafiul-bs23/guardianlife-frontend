import { useState } from 'react';
import ActionButton from "../../../shared/Components/BaseButton.tsx";
import GetInTouch from "../../../assets/images/home/GetInTouch.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
    agreeToPolicy: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full mt-16 lg:mt-[140px] px-4 xl:px-0">
      <div className="w-full lg:flex-1 rounded-[32px] lg:rounded-tr-[32px] lg:rounded-br-[32px] lg:rounded-tl-none lg:rounded-bl-none h-64 lg:h-[567px] my-auto overflow-hidden">
        <img
          src={GetInTouch}
          alt="GetInTouch"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:flex-1 flex flex-col py-8 lg:py-[62.5px] lg:pl-8 justify-center gap-4">
        <div className="p-6 sm:p-12 lg:p-16 flex flex-col justify-center lg:mr-16">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Get in touch
            </h2>
            <p className="text-gray-600 text-base">
              Our team would love to hear from you.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Name Here"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone number <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm bg-white"
                >
                  <option value="BD">BD</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="IN">IN</option>
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+88 (017) 000-0000"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                // rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400 text-sm"
                placeholder="Your message..."
              ></textarea>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agreeToPolicy"
                checked={formData.agreeToPolicy}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
              />
              <label className="text-sm text-gray-600">
                You agree to our{' '}
                <a href="#" className="text-gray-900 underline hover:text-orange-500 transition-colors">
                  privacy policy
                </a>
                .
              </label>
            </div>

            <div className="pt-2">
              <ActionButton
                text="send message"
                className="w-[249px]"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>

      </div>
      <div>
      </div>
    </div>
  );
};

export default ContactForm;