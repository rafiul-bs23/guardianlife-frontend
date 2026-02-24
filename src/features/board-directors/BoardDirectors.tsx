
import BoardDirectorsList from './components/BoardDirectorsList';
import { HEADER_DATA } from './api/mockData';
import BoardDirectoraHeader from './components/BoardDirectoraHeader';
import { useBoardDirectors } from './hooks/useBoardDirectors';

const BoardDirectors = () => {
  const { data: dynamicData } = useBoardDirectors();

  return (
    <main className="min-h-screen bg-gray-50 ">
      <BoardDirectoraHeader data={HEADER_DATA} />
      <BoardDirectorsList
        data={{
          directors: dynamicData || []
        }}
      />
    </main>
  );
};

export default BoardDirectors;
