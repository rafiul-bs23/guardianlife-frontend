import { useState } from 'react';
import { Search } from 'lucide-react';
import { useFormLibrary } from '../hooks/useFormLibrary';

const FormList = () => {
    const { forms, loading, error } = useFormLibrary();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredForms = forms.filter(form =>
        form.file_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return <div className="text-center py-10">Loading forms...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">{error}</div>;
    }

    return (
        <div className="w-full flex flex-col gap-8">
            {/* Search Bar */}
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-500" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm shadow-sm"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Table Container */}
            <div className="w-full bg-white border border-gray-200 rounded-sm">
                {/* Table Header */}
                <div className="grid grid-cols-[1fr_200px] bg-[#FDF0E6] border-b border-gray-200 py-4 px-6">
                    <div className="font-semibold text-gray-900">File Name</div>
                    <div className="font-semibold text-gray-900 text-center">Action</div>
                </div>

                {/* Table Body */}
                <div className="flex flex-col">
                    {filteredForms.map((form, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[1fr_200px] border-b border-gray-200 last:border-0 py-3.5 px-6 items-center hover:bg-gray-50 transition-colors"
                        >
                            <div className="text-gray-700 text-[15px]">{form.file_name}</div>
                            <div className="flex justify-center">
                                <a
                                    href={form.pdf_download_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary text-white text-sm font-medium px-8 py-2.5 rounded-full hover:bg-opacity-90 transition-all text-center inline-block"
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    ))}
                    {filteredForms.length === 0 && (
                        <div className="py-12 text-center text-gray-500">
                            No forms found matching "{searchQuery}"
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormList;
