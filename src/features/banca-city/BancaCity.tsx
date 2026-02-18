import React from "react";
import BancaCityHeader from "./components/BancaCityHeader";
import { useHeader } from "./hooks/useHeader";

const BancaCity = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();

  if (isHeaderLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {headerData && <BancaCityHeader data={headerData} />}

      <div className="container mx-auto px-4 py-16">
        {/* Future content for City Bank partnership details can go here */}
      </div>
    </main>
  );
};

export default BancaCity;
