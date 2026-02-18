import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import type { ContactInfoData } from '../types';

interface ContactInfoProps {
    data: ContactInfoData;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ data }) => {
    return (
        <div className="bg-[#EB6925] text-white p-10 rounded-[40px] shadow-xl h-full flex flex-col justify-between">
            <div className="space-y-10">
                {/* Visit Us */}
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{data.visitUs.title}</h3>
                    <p className="text-white/80 font-medium">{data.visitUs.subtitle}</p>
                    <p className="font-bold leading-snug max-w-[300px]">
                        {data.visitUs.address}
                    </p>
                </div>

                {/* Call Us */}
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{data.callUs.title}</h3>
                    <p className="text-white/80 font-medium leading-tight">
                        {data.callUs.subtitle}
                    </p>
                    <div className="space-y-1">
                        <p className="text-2xl font-bold">{data.callUs.phone1}</p>
                        <p className="text-lg font-bold">{data.callUs.phone2}</p>
                    </div>
                </div>

                {/* Chat with us */}
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{data.chatWithUs.title}</h3>
                    <p className="text-white/80 font-medium">{data.chatWithUs.subtitle}</p>
                    <p className="text-xl font-bold">{data.chatWithUs.email}</p>
                </div>
            </div>

            {/* Social Media */}
            <div className="mt-12 space-y-4">
                <h3 className="text-xl font-bold">{data.socialMedia.title}</h3>
                <div className="flex gap-4">
                    <a href={data.socialMedia.links.facebook} className="hover:opacity-80 transition-opacity">
                        <Facebook size={24} fill="white" />
                    </a>
                    <a href={data.socialMedia.links.linkedin} className="hover:opacity-80 transition-opacity">
                        <Linkedin size={24} fill="white" />
                    </a>
                    <a href={data.socialMedia.links.instagram} className="hover:opacity-80 transition-opacity">
                        <Instagram size={24} />
                    </a>
                    <a href={data.socialMedia.links.youtube} className="hover:opacity-80 transition-opacity">
                        <Youtube size={24} fill="white" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
