import OutPatientCard from "./OutPatientCard";
import { MOCK_OUTPATIENT_DATA } from "../api/mockData";

export const OutPatientCardsSection = () => {
    return (
        <section className="bg-white pb-16 lg:pb-20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
                    {MOCK_OUTPATIENT_DATA.map((product: any) => (
                        <div key={product.productCode} className="flex justify-center">
                            <OutPatientCard
                                thumbnailUrl={product.thumbnailUrl}
                                title={product.title}
                                description={product.description}
                                points={product.points}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
