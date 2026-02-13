import React from 'react';
import type { MicroContactFormData } from '../types';
import Button from '../../../shared/Components/Button';

interface MicroContactFormProps {
    data: MicroContactFormData;
}

const MicroContactForm: React.FC<MicroContactFormProps> = ({ data }) => {
    return (
        <section className="py-20 bg-[#F6DECE]/10">
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="bg-[#F6DECE] rounded-[48px] p-8 lg:p-16 shadow-sm border border-orange-50/50">
                    <h2 className="text-3xl font-black text-[#32367B] mb-12">
                        {data.title}
                    </h2>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        {/* Name Field */}
                        <div className="space-y-2">
                            <label className="text-[15px] font-bold text-gray-700 flex gap-1">
                                {data.fields.fullName.label}
                                {data.fields.fullName.required && <span className="text-red-500">*</span>}
                            </label>
                            <input
                                type="text"
                                placeholder={data.fields.fullName.placeholder}
                                className="w-full bg-white rounded-xl px-6 py-4 border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-300 font-medium"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-[15px] font-bold text-gray-700 flex gap-1">
                                {data.fields.email.label}
                                {data.fields.email.required && <span className="text-red-500">*</span>}
                            </label>
                            <input
                                type="email"
                                placeholder={data.fields.email.placeholder}
                                className="w-full bg-white rounded-xl px-6 py-4 border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-300 font-medium"
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-2">
                            <label className="text-[15px] font-bold text-gray-700 flex gap-1">
                                {data.fields.phone.label}
                                {data.fields.phone.required && <span className="text-red-500">*</span>}
                            </label>
                            <div className="flex gap-4">
                                <div className="bg-white rounded-xl px-4 flex items-center gap-2 group cursor-pointer border-none shadow-sm h-[56px]">
                                    <span className="text-[15px] font-bold text-gray-700">BD</span>
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder={data.fields.phone.placeholder}
                                    className="flex-1 bg-white rounded-xl px-6 py-4 border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-300 font-medium"
                                />
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2">
                            <label className="text-[15px] font-bold text-gray-700 flex gap-1">
                                {data.fields.message.label}
                                {data.fields.message.required && <span className="text-red-500">*</span>}
                            </label>
                            <textarea
                                rows={6}
                                placeholder={data.fields.message.placeholder}
                                className="w-full bg-white rounded-xl px-6 py-4 border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-300 font-medium resize-none"
                            />
                        </div>

                        {/* Privacy Policy */}
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded bg-white flex items-center justify-center cursor-pointer border-none shadow-sm">
                                {/* Optional Checkmark could go here */}
                            </div>
                            <span className="text-sm font-bold text-gray-600">
                                {data.privacyPolicy}
                            </span>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <Button
                                label={data.submitButton}
                                variant="solid-orange-with-icon"
                                className="rounded-full shadow-lg shadow-orange-500/20"
                                labelClass="text-base font-bold"
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MicroContactForm;
