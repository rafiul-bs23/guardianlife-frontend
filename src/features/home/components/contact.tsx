import GetInTouch from "../../../assets/images/home/GetInTouch.png";
import Button from '../../../shared/Components/Button.tsx';
import { useLeadForm } from '../hooks/useLeadForm';

const ContactForm = () => {
  const { formData, errors, is_loading, success, error, handleChange, handleSubmit, reset } = useLeadForm();

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

          {/* Success banner */}
          {success && (
            <div className="mb-6 flex items-start gap-3 px-4 py-3 rounded-xl bg-green-50 border border-green-200">
              <span className="text-green-500 mt-0.5">✓</span>
              <div>
                <p className="text-green-800 font-semibold text-sm">Message sent successfully!</p>
                <p className="text-green-700 text-xs mt-0.5">We'll get back to you as soon as possible.</p>
              </div>
              <button onClick={reset} className="ml-auto text-green-500 hover:text-green-700 text-lg leading-none">&times;</button>
            </div>
          )}

          {/* API error banner */}
          {error && (
            <div className="mb-6 px-4 py-3 rounded-xl bg-red-50 border border-red-200">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

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
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm ${errors.fullName ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
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
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
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
                  placeholder="01XXXXXXXXX"
                  className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm ${errors.phoneNumber ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
                />
              </div>
              {errors.phoneNumber && <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>}
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
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400 text-sm ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
                placeholder="Your message..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            {/* Privacy policy */}
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
            {errors.agreeToPolicy && <p className="-mt-4 text-xs text-red-500">{errors.agreeToPolicy}</p>}

            <Button
              label={is_loading ? 'Sending...' : 'send message'}
              variant="solid-orange"
              onClick={handleSubmit}
              disabled={is_loading}
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ContactForm;
