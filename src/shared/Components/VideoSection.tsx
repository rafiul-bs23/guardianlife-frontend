import React from 'react';
import { Play } from 'lucide-react';

interface VideoThumbnailProps {
    thumbnail: string;
    title?: string;
    onClick?: () => void;
    className?: string;
    aspectRatio?: 'video' | 'square' | 'auto';
    rounded?: string;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
    thumbnail,
    title,
    onClick,
    className = '',
    aspectRatio = 'video',
    rounded = 'rounded-2xl'
}) => {
    const aspectClass = {
        video: 'aspect-video',
        square: 'aspect-square',
        auto: ''
    }[aspectRatio];

    return (
        <div
            className={`relative group cursor-pointer overflow-hidden ${aspectClass} ${rounded} ${className}`}
            onClick={onClick}
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
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white fill-current ml-1" />
                </div>
            </div>
        </div>
    );
};

export default VideoThumbnail;
