
export const getRandomLightBg = () => {
    const colors = [
        'bg-[#EFF6FF]', // Blue
        'bg-[#F0FDF4]', // Green
        'bg-[#F5F3FF]', // Purple
        'bg-[#FFF7ED]', // Orange
        'bg-[#FEFCE8]', // Yellow
        'bg-[#FDF2F8]', // Pink
        'bg-[#F0FDFA]', // Teal
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

export const getLightBgByIndex = (index: number) => {
    const colors = [
        'bg-[#EFF6FF]', // Blue
        'bg-[#F0FDF4]', // Green
        'bg-[#F5F3FF]', // Purple
        'bg-[#FFF7ED]', // Orange
        'bg-[#FEFCE8]', // Yellow
        'bg-[#FDF2F8]', // Pink
        'bg-[#F0FDFA]', // Teal
    ];
    return colors[index % colors.length];
};
