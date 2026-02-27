import React from 'react';
import Button from '../../../shared/Components/Button';
import { usePopup } from '../../../shared/context/PopupContext';

interface GuideYouProps {
    data: {
        title: string;
        description: { text: string; color: string; lineBreak?: boolean }[];
        image: string;
        buttonText: string;
    };
}

const GuideYou: React.FC<GuideYouProps> = ({ data }) => {
    const { showPopup } = usePopup();
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 h-auto lg:h-[437px] w-full mt-16 lg:mt-[140px] px-4 lg:px-0">
            <div className="flex-1 rounded-tr-[32px] rounded-br-[32px] rounded-[32px] lg:rounded-none lg:rounded-tr-[32px] lg:rounded-br-[32px] overflow-hidden hidden md:block">
                <img
                    src={data.image}
                    alt="Guide You"
                    className="w-full h-[500px] lg:h-full object-cover"
                />
            </div>
            <div className="flex-1 flex flex-col py-12 lg:py-[62.5px] lg:pl-8 justify-center gap-4 px-4 text-center lg:text-left items-center lg:items-start">
                <p className="font-black text-[24px] leading-[24px] tracking-[0.2em] uppercase text-[#1E3161]">{data.title}</p>
                <p className="uppercase text-[28px] lg:text-[40px] leading-[40px] lg:leading-[60px] tracking-[0.02em]">
                    {data.description.map((item, index) => (
                        <React.Fragment key={index}>
                            <span style={{ color: item.color }}>{item.text}</span>
                            {item.lineBreak && <br className="hidden lg:block" />}
                        </React.Fragment>
                    ))}
                </p>
                <Button
                    label={data.buttonText}
                    className=""
                    onClick={() => showPopup()}
                />
            </div>
        </div>
    );
};

export default GuideYou;
