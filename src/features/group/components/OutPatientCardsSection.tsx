import OutPatientCard from "./OutPatientCard";
import { MOCK_OUTPATIENT_DATA } from "../api/mockData";

export const OutPatientCardsSection = () => {
    return (
        <div className="flex flex-wrap lg:grid lg:grid-cols-2 gap-8 justify-center mt-16 lg:mt-[84px] px-4 lg:px-[100px] xl:px-[200px]">
            {MOCK_OUTPATIENT_DATA.map((product: any) => (
                <OutPatientCard
                    key={product.productCode}
                    thumbnailUrl={product.thumbnailUrl}
                    title={product.title}
                    description={product.description}
                    points={product.points}
                />
            ))}
        </div>
    );
};
