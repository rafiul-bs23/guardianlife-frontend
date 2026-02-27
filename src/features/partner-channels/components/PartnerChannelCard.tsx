import type { PartnerChannel } from '../types';

interface PartnerChannelCardProps {
    channel: PartnerChannel;
    is_selected: boolean;
    on_select: (id: string) => void;
}

const PartnerChannelCard = ({ channel, is_selected, on_select }: PartnerChannelCardProps) => {
    return (
        <div
            onClick={() => on_select(channel?.id)}
            className={`
                flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border-2 cursor-pointer
                transition-all duration-200 select-none
                ${is_selected
                    ? 'border-primary shadow-md shadow-primary/20'
                    : 'border-gray-200 hover:border-primary hover:shadow-sm'
                }
            `}
        >
            {/* Logo area */}
            <div className="w-full aspect-square flex items-center justify-center rounded-xl bg-gray-50 overflow-hidden p-3">
                {channel?.logo_url ? (
                    <img
                        src={channel?.logo_url}
                        alt={channel?.channel_name}
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                )}
            </div>

            {/* Channel name */}
            <p className="text-sm font-semibold text-primary-blue text-center leading-tight">
                {channel?.channel_name}
            </p>

            {/* Tags/badges */}
            {channel?.tags && channel?.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1 justify-center">
                    {channel?.tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-primary-blue/10 text-primary-blue"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3 h-3 shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PartnerChannelCard;
