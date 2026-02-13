import React from 'react';
import type { ClaimDocumentsData } from '../types';
import Button from '../../../shared/Components/Button';

interface ClaimDocumentsProps {
    data: ClaimDocumentsData;
}

const ClaimDocuments: React.FC<ClaimDocumentsProps> = ({ data }) => {
    if (!data?.category?.length) return null;

    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">
                        FORMS AND STATEMENT
                    </h2>
                </div>

                {/* Table Container */}
                <div className="overflow-x-auto rounded-lg border border-[#D1D5DB]">
                    <table className="w-full border-collapse bg-white">
                        <thead>
                            <tr className="bg-[#FFF4E5] border-b border-[#D1D5DB]">
                                <th className="px-6 py-4 text-left text-[15px] font-bold text-gray-800 border-r border-[#D1D5DB] w-1/4">
                                    Form Category
                                </th>
                                <th className="px-6 py-4 text-left text-[15px] font-bold text-gray-800 border-r border-[#D1D5DB] w-1/2">
                                    File Name
                                </th>
                                <th className="px-6 py-4 text-center text-[15px] font-bold text-gray-800">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.category.map((cat, catIdx) => (
                                <React.Fragment key={catIdx}>
                                    {cat.documents.map((doc, docIdx) => (
                                        <tr key={`${catIdx}-${docIdx}`} className="border-b border-[#D1D5DB] last:border-b-0">
                                            {/* Rowspan for Category */}
                                            {docIdx === 0 && (
                                                <td
                                                    rowSpan={cat.documents.length}
                                                    className="px-6 py-4 align-middle bg-white border-r border-[#D1D5DB] font-bold text-gray-700 text-[15px]"
                                                >
                                                    {cat.name}
                                                </td>
                                            )}

                                            {/* Document Name */}
                                            <td className="px-6 py-4 text-[15px] font-medium text-gray-700 border-r border-[#D1D5DB]">
                                                {doc.fileName}
                                            </td>

                                            {/* Action Button */}
                                            <td className="px-6 py-3 whitespace-nowrap text-center">
                                                <div className="flex justify-center">
                                                    <Button
                                                        label="Download"
                                                        variant="solid-orange"
                                                        className="py-2 px-8  min-w-[110px] rounded-lg"
                                                        onClick={() => window.open(doc.pdfDownloadLink, '_blank')}
                                                        labelClass="text-sm"
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ClaimDocuments;
