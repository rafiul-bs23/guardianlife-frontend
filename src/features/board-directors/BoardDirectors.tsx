import React from 'react';
import BoardDirectorsList from './components/BoardDirectorsList';
import { mockBoardDirectorsData } from './api/mockData';

const BoardDirectors = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <BoardDirectorsList data={mockBoardDirectorsData} />
    </main>
  );
};

export default BoardDirectors;
