
import { ArrowRight } from 'lucide-react';
import Button from '../../../shared/Components/Button';


const ContactForm = () => {
    return (
        <div className="bg-white p-2 md:p-6 lg:p-8 h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#4B4897] mb-10">Please fill up the form</h2>

            <form className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Name Here"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm"
                    />
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm"
                    />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                        Phone number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 transition-all">
                        <select className="bg-transparent px-3 py-3 text-sm border-r border-gray-200 outline-none">
                            <option>BD ⌵</option>
                        </select>
                        <input
                            type="tel"
                            placeholder="+88 (017) 000-0000"
                            className="w-full px-4 py-3 outline-none text-sm"
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message</label>
                    <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm resize-none"
                    ></textarea>
                </div>

                {/* Privacy Policy */}
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="privacy"
                        className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer">
                        You agree to our privacy policy.
                    </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <Button
                        label="Send Message"
                        variant="solid-orange"
                        onClick={() => { }}
                        icon={ArrowRight}
                    />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
