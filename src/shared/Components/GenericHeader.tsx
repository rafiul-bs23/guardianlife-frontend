import React from 'react';
import Navbar from './Navbar';
import type { HeaderData } from '../types/header';
import VideoThumbnail from './VideoSection';

interface GenericHeaderProps {
    data: HeaderData | null;
    variant?: 'boxed' | 'immersive';
    className?: string;
    mediaClassName?: string;
    mediaContainerClassName?: string;
    contentWrapperClassName?: string;
    innerWrapperClassName?: string;
    imgClassName?: string;
    descriptionClassName?: string;
    titleClassName?: string;
    actions?: React.ReactNode;
    children?: React.ReactNode;
    customBgStyles?: React.CSSProperties;
}

const GenericHeader: React.FC<GenericHeaderProps> = ({
    data,
    variant = 'boxed',
    className = "",
    titleClassName = "",
    mediaClassName = "",
    mediaContainerClassName = "",
    contentWrapperClassName = "",
    innerWrapperClassName = "",
    imgClassName = "",
    descriptionClassName = "",
    customBgStyles = {},
    actions,
    children
}) => {
    const isVideo = data?.media?.type === 'video';
    const isImmersive = variant === 'immersive';

    const bgStyles = data ? {
        backgroundImage: `url(${data.background_image_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    } : customBgStyles;

    const headerContent = data ? (
        <div className={`w-full px-8 md:px-16 lg:px-24 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 ${contentWrapperClassName}`}>
            {/* Text Section */}
            <div className="w-full lg:w-[55%]">
                {data.badge && (
                    <div className="mb-6">
                        <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider border border-white/30">
                            {data.badge}
                        </span>
                    </div>
                )}

                <h1 className={`text-4xl md:text-2xl lg:text-[45px] font-bold text-white flex flex-wrap  ${titleClassName}`}>
                    {data.title.map((item, index) => (
                        <span key={index} style={{ color: item.color, lineHeight: '1.1' }}>
                            {item.text}
                        </span>
                    ))}
                </h1>

                {data.description && (
                    <div className="mt-4 max-w-2xl">
                        <p className={`text-[#2E3192] text-sm md:text-base font-semibold uppercase tracking-[0.1em] leading-loose ${descriptionClassName}`}>
                            {data.description}
                        </p>
                    </div>
                )}

                {actions && (
                    <div className="mt-10 flex flex-wrap gap-6 items-center">
                        {actions}
                    </div>
                )}
            </div>

            {/* Media Section (Image or Video) */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
                <div className={`relative w-full max-w-[550px] aspect-[1.5/1] ${mediaContainerClassName}`}>
                    <div className={`w-full h-full overflow-hidden shadow-xl group relative ${mediaClassName}`}>
                        {isVideo ? (
                            <VideoThumbnail
                                aspectRatio="auto"
                                rounded="rounded-none"
                                className="w-full h-full"
                                url={data.media?.url || ""}
                            />
                        ) : (
                            <img
                                src={data.media?.url}
                                alt="Header Media"
                                className={`w-full h-full object-cover ${imgClassName}`}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    ) : null;

    if (isImmersive) {
        return (
            <section
                className={`relative w-full min-h-[600px] flex flex-col ${className} ${!data?.background_video_url ? 'bg-primary' : ''} overflow-hidden`}
                style={!data?.background_video_url ? bgStyles : {}}
            >
                {data?.background_video_url && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        src={data?.background_video_url}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/10 z-0 pointer-events-none" />
                <div className="relative z-10 flex flex-col w-full h-full">
                    <Navbar transparent />
                    <div className={`flex-grow flex items-center ${innerWrapperClassName}`}>
                        {children || headerContent}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <Navbar />
            <section className={`bg-white px-4 md:px-10 lg:px-20 pb-12 pt-8 ${className}`}>
                <div
                    className="relative w-full rounded-[10px] md:rounded-[30px] overflow-hidden min-h-[450px] flex items-center shadow-lg bg-primary"
                    style={!data?.background_video_url ? bgStyles : {}}
                >
                    {data?.background_video_url && (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover z-0"
                            src={data?.background_video_url}
                        />
                    )}
                    {/* Brand Orange Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-primary/80 z-0 pointer-events-none" />
                    <div className="relative z-10 w-full">
                        {children || headerContent}
                    </div>
                </div>
            </section>
        </>
    );
};

export default GenericHeader;

