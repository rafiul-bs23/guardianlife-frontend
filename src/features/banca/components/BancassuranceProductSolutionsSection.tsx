import Contentheader from "../../../shared/Components/Contentheader";
import { BancassuranceProductSolutions } from "./BancassuranceProductSolutions";
import { MOCK_PRODUCT_SOLUTIONS_DATA } from "../api/mockData";

export const BancassuranceProductSolutionsSection = () => {
    return (
        <div className="mt-16 lg:mt-[199px] px-4 lg:px-0">
            <Contentheader
                title={MOCK_PRODUCT_SOLUTIONS_DATA.header.title}
                description={MOCK_PRODUCT_SOLUTIONS_DATA.header.description}
            />
            <div className="mt-12 lg:mt-[60px]">
                <BancassuranceProductSolutions />
            </div>
        </div>
    );
};
