import ShareholdersHeader from './components/ShareholdersHeader';
import ShareholdersList from './components/ShareholdersList';

const Shareholders = () => {
    return (
        <main className="min-h-screen bg-white">
            <ShareholdersHeader />
            <div className="w-full px-4 md:px-8 mx-auto pb-20">
                <ShareholdersList />
            </div>
        </main>
    );
};

export default Shareholders;
