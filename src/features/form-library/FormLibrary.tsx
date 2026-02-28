import FormLibraryHeader from './components/FormLibraryHeader';
import FormList from './components/FormList';

const FormLibrary = () => {
    return (
        <main className="min-h-screen bg-white">
            <FormLibraryHeader />
            <div className="w-full mt-20 px-4 md:px-8">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-8 pb-32">
                    <FormList />
                </div>
            </div>
        </main>
    );
};

export default FormLibrary;
