import { useShareholders } from '../hooks/useShareholders';

const ShareholdersList = () => {
    const { shareholders, loading, error } = useShareholders();

    if (loading) {
        return <div className="text-center py-10">Loading shareholders...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">{error}</div>;
    }

    return (
        <div className="w-full max-w-full flex flex-col pt-10">
            {/* Table Container */}
            <div className="w-full max-w-full overflow-x-auto bg-white border border-gray-100 rounded-sm shadow-sm">
                <div className="min-w-[800px]">
                    {/* Table Header */}
                    <div className="grid grid-cols-[80px_1fr_250px_250px] bg-primary text-white py-4 px-6">
                        <div className="font-semibold text-center text-sm">SL</div>
                        <div className="font-semibold text-center text-sm">Name Of Shareholders</div>
                        <div className="font-semibold text-center text-sm">No Of Shares</div>
                        <div className="font-semibold text-center text-sm">% Of Shareholdings</div>
                    </div>

                    {/* Table Body */}
                    <div className="flex flex-col">
                        {shareholders.map((item, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-[80px_1fr_250px_250px] border-b border-gray-100 last:border-0 py-4 px-6 items-center hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-[#f8f9fc]' : 'bg-white'}`}
                            >
                                <div className="text-gray-900 font-medium text-center text-[15px] border-r border-gray-200 h-full flex items-center justify-center">{index + 1}</div>
                                <div className="text-gray-900 font-medium text-center text-[15px] border-r border-gray-200 h-full flex items-center justify-center">{item.shareholder_name}</div>
                                <div className="text-gray-900 font-medium text-center text-[15px] border-r border-gray-200 h-full flex items-center justify-center">{item.number_of_shares.toLocaleString()}</div>
                                <div className="text-gray-900 font-medium text-center text-[15px] h-full flex items-center justify-center">{item.percentage_of_shareholding.toFixed(2)}</div>
                            </div>
                        ))}
                        {shareholders.length === 0 && (
                            <div className="py-12 text-center text-gray-500">
                                No shareholders data available.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareholdersList;
