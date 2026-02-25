import { MaternityBenefits } from "./MaternityBenefits";
import { MOCK_MATERNITY_DATA } from "../api/mockData";

export const MaternityBenefitsSection = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-[#F5DBCB] rounded-[30px] lg:rounded-[50px] mt-16 lg:mt-[94px] mx-4 lg:mx-[150px] xl:mx-[200px] py-12 lg:py-[65px] gap-8 lg:gap-0 px-4 lg:px-0">
            <div className="w-full lg:w-1/2 lg:px-[43px]">
                <MaternityBenefits
                    title={MOCK_MATERNITY_DATA.title}
                    description={MOCK_MATERNITY_DATA.description}
                    items={MOCK_MATERNITY_DATA.items}
                />
            </div>
            <div className="w-full lg:w-1/2 lg:px-[40px]">
                <img
                    src={MOCK_MATERNITY_DATA.imgUrl}
                    alt="image"
                    className="w-full h-auto lg:w-[688px] lg:h-[507px] object-cover rounded-[35px]"
                />
            </div>
        </div>
    );
};
