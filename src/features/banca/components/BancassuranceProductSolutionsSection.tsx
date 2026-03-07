import Contentheader from "../../../shared/Components/Contentheader";
import { BancassuranceProductSolutions } from "./BancassuranceProductSolutions";
import { mock_product_solutions_data } from "../api/mockData";

export const BancassuranceProductSolutionsSection = () => {
    return (
        <div className="mt-16 lg:mt-[199px] px-4 lg:px-0">
            <Contentheader
                title={mock_product_solutions_data?.header?.title}
                description={mock_product_solutions_data?.header?.description}
            />
            <div className="mt-12 lg:mt-[60px]">
                <BancassuranceProductSolutions />
            </div>
        </div>
    );
};
