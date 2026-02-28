import PartnersBanner from "../../../shared/Components/PartnersBanner";

import { partners } from "../api/mockData";

const BusinessPartners = () => (
  <div className="bg-[#F4F4F4] w-full py-20">
    <PartnersBanner
      image={"/assets/images/home/BusinessPartners/MainImage.jpg"}
      imageAlt="Business Partnership"
      title={"Power up your business with\nGuardian Life Insurance."}
      description={
        "Join 450+ organizations that trust us —\n" +
        "the industry leader in group coverage.\n" +
        "The best choice to protect and\n" +
        "empower your employees."
      }
      buttonLabel="Explore Opportunities"
      buttonTo="/group"
      partners={partners}
      maxWidth="max-w-[1440px]"
    />
  </div>
);

export default BusinessPartners;
