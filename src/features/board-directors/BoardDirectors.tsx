
import BoardDirectorsList from './components/BoardDirectorsList';
import { mockBoardDirectorsData } from './api/mockData';
import BoardDirectoraHeader from './components/BoardDirectoraHeader';
import { HEADER_DATA } from './api/mockData';

const BoardDirectors = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <BoardDirectoraHeader data={HEADER_DATA} />
      <BoardDirectorsList data={mockBoardDirectorsData} />
    </main>
  );
};

export default BoardDirectors;
