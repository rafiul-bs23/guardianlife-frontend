import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { useContactForm } from '../hooks/useContactForm';

interface ContactFormProps {
    channel: string;
    type?: 'lead' | 'job';
    variant?: 'card' | 'flat';
    title?: string;
    subtitle?: string;
    className?: string;
}

const ContactForm = ({
    channel,
    type = 'lead',
    variant = 'flat',
    title,
    subtitle,
    className = '',
}: ContactFormProps) => {
    const { formData, errors, is_loading, success, error, handleChange, handleFileChange, handleSubmit, reset } =
        useContactForm(channel, type);

    const displayTitle = title ?? (variant === 'card' ? 'Please fill up the form' : 'Get in touch');

    /* ─── input/label styles by variant ─── */
    const inputBase =
        variant === 'card'
            ? 'w-full bg-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300 transition-all placeholder:text-gray-300 font-medium text-sm'
            : 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm';

    const inputError =
        variant === 'card' ? 'ring-2 ring-red-300' : 'border-red-400 bg-red-50';

    const labelBase =
        variant === 'card'
            ? 'text-[15px] font-bold text-gray-700'
            : 'text-sm font-medium text-gray-700';

    /* ─── form body (shared between variants) ─── */
    const formBody = (
        <>
            {/* title */}
            {variant === 'card' ? (
                <h2 className="text-3xl font-black text-[#32367B] mb-12">{displayTitle}</h2>
            ) : (
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[#4B4897] mb-2">{displayTitle}</h2>
                    {subtitle && <p className="text-gray-600 text-base">{subtitle}</p>}
                </div>
            )}

            {/* success banner */}
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

            {/* error banner */}
            {error && (
                <div className="mb-6 px-4 py-3 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-red-700 text-sm">{error}</p>
                </div>
            )}

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Full Name */}
                <div className="space-y-2">
                    <label className={`${labelBase} flex gap-1`}>
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter Name Here"
                        className={`${inputBase} ${errors.fullName ? inputError : ''}`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className={labelBase}>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`${inputBase} ${errors.email ? inputError : ''}`}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <label className={`${labelBase} flex gap-1`}>
                        Phone number <span className="text-red-500">*</span>
                    </label>
                    {variant === 'card' ? (
                        <div className="flex gap-3">
                            <div className="bg-white rounded-xl px-4 flex items-center gap-2 h-[46px] shadow-sm">
                                <span className="text-[15px] font-bold text-gray-700">BD</span>
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                                    <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="+88 (017) 000-0000"
                                className={`flex-1 bg-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-gray-300 font-medium text-sm ${errors.phoneNumber ? inputError : ''}`}
                            />
                        </div>
                    ) : (
                        <div className={`flex rounded-xl border overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 transition-all ${errors.phoneNumber ? 'border-red-400' : 'border-gray-200'}`}>
                            <select
                                name="countryCode"
                                className="bg-transparent px-3 py-3 text-sm border-r border-gray-200 outline-none"
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
                                className="flex-1 px-4 py-3 outline-none text-sm"
                            />
                        </div>
                    )}
                    {errors.phoneNumber && <p className="text-xs text-red-500">{errors.phoneNumber}</p>}
                </div>

                {/* Applying Position (Job only) */}
                {type === 'job' && (
                    <div className="space-y-2">
                        <label className={`${labelBase} flex gap-1`}>
                            Applying Position <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="applyingPosition"
                            value={formData.applyingPosition}
                            onChange={handleChange}
                            placeholder="Enter Position Here"
                            className={`${inputBase} ${errors.applyingPosition ? inputError : ''}`}
                        />
                        {errors.applyingPosition && <p className="text-xs text-red-500">{errors.applyingPosition}</p>}
                    </div>
                )}

                {/* CV Upload (Job only) */}
                {type === 'job' && (
                    <div className="space-y-2">
                        <label className={`${labelBase} flex gap-1`}>
                            Upload CV <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type="file"
                                name="cv"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                id="cv-upload"
                            />
                            <label
                                htmlFor="cv-upload"
                                className={`${inputBase} flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors ${errors.cv ? inputError : ''}`}
                            >
                                <span className={formData.cv ? 'text-gray-900' : 'text-gray-400'}>
                                    {formData.cv ? formData.cv.name : 'Selection CV (PDF, DOC, DOCX)'}
                                </span>
                                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                                    Browse
                                </div>
                            </label>
                        </div>
                        {errors.cv && <p className="text-xs text-red-500">{errors.cv}</p>}
                    </div>
                )}

                {/* Message */}
                <div className="space-y-2">
                    <label className={labelBase}>Message</label>
                    <textarea
                        rows={variant === 'card' ? 6 : 4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        className={`${inputBase} resize-none ${errors.message ? inputError : ''}`}
                    />
                    {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                {/* Privacy Policy */}
                <div className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        id={`privacy-${channel}`}
                        name="agreeToPolicy"
                        checked={formData.agreeToPolicy}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 rounded text-orange-500 border-gray-300 focus:ring-orange-500 cursor-pointer"
                    />
                    <label htmlFor={`privacy-${channel}`} className="text-sm text-gray-600 cursor-pointer">
                        You agree to our{' '}
                        <a href="#" className="text-gray-900 underline hover:text-orange-500 transition-colors">
                            privacy policy
                        </a>
                        .
                    </label>
                </div>
                {errors.agreeToPolicy && <p className="-mt-4 text-xs text-red-500">{errors.agreeToPolicy}</p>}

                {/* Submit */}
                <div className="pt-2">
                    <Button
                        label={is_loading ? 'Sending...' : 'Send Message'}
                        variant="solid-orange"
                        icon={ArrowRight}
                        onClick={handleSubmit}
                        disabled={is_loading}
                        className={variant === 'card' ? 'rounded-full shadow-lg shadow-orange-500/20' : ''}
                        labelClass={variant === 'card' ? 'text-base font-bold' : undefined}
                    />
                </div>
            </form>
        </>
    );

    /* ─── card variant: peach section wrapper ─── */
    if (variant === 'card') {
        return (
            <section className="py-20 bg-[#F6DECE]/10">
                <div className="max-w-[1000px] mx-auto px-4">
                    <div className="bg-[#F6DECE] rounded-[48px] p-8 lg:p-16 shadow-sm border border-orange-50/50">
                        {formBody}
                    </div>
                </div>
            </section>
        );
    }

    /* ─── flat variant: plain container ─── */
    return (
        <div className={`flex flex-col justify-center ${className}`}>
            {formBody}
        </div>
    );
};

export default ContactForm;
