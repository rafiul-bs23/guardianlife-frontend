import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Play, X } from 'lucide-react';

interface VideoThumbnailProps {
    thumbnail?: string;
    title?: string;
    onClick?: () => void;
    className?: string;
    aspectRatio?: 'video' | 'square' | 'auto';
    rounded?: string;
    url: string;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
    thumbnail = "/src/assets/images/category/headerImage.jpg",
    title,
    onClick,
    className = '',
    aspectRatio = 'video',
    rounded = 'rounded-2xl',
    url
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const aspectClass = {
        video: 'aspect-video',
        square: 'aspect-square',
        auto: ''
    }[aspectRatio];

    const handlePlayClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onClick) {
            onClick();
        }
        setIsModalOpen(true);
    };

    const getEmbedUrl = (videoUrl: string) => {
        if (!videoUrl) return '';
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
        const match = videoUrl.match(youtubeRegex);
        if (match && match[1]) {
            return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
        }
        return videoUrl;
    };

    const isVideoFile = url?.toLowerCase().endsWith('.mp4') || url?.toLowerCase().endsWith('.webm');
    const embedUrl = getEmbedUrl(url);

    return (
        <>
            <div
                className={`relative group cursor-pointer overflow-hidden ${aspectClass} ${rounded} ${className}`}
                onClick={handlePlayClick}
            >
                <img
                    src={thumbnail.startsWith('http') || thumbnail.startsWith('/') ? thumbnail : `/${thumbnail}`}
                    alt={title || "Video thumbnail"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '';
                    }}
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-colors group-hover:bg-black/20">
                    <div className="w-[15%] max-w-[96px] min-w-[48px] aspect-square rounded-full bg-primary flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                        <Play className="w-[40%] h-[40%] text-white fill-current ml-[5%]" />
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {isModalOpen && typeof document !== 'undefined' && createPortal(
                <div
                    className="fixed inset-0 !z-[1000] flex items-center justify-center bg-black/90 p-4 md:p-10"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
                            aria-label="Close video"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {isVideoFile ? (
                            <video
                                src={url}
                                controls
                                autoPlay
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <iframe
                                src={embedUrl}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default VideoThumbnail;
