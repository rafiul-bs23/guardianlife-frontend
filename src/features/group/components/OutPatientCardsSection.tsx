import OutPatientCard from "./OutPatientCard";
import { MOCK_OUTPATIENT_DATA } from "../api/mockData";

export const OutPatientCardsSection = () => {
    return (
        <section className="bg-white pb-16 lg:pb-20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-[60px] justify-center items-stretch object-cover w-full">
                    {MOCK_OUTPATIENT_DATA.map((product: any) => (
                        <div key={product.product_code} className="flex justify-center w-full lg:w-1/2 max-w-[643px]">
                            <OutPatientCard
                                thumbnail_url={product.thumbnail_url}
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
