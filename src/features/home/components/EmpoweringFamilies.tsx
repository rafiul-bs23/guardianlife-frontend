import PartnersBanner from "../../../shared/Components/PartnersBanner";

import { partners2 } from "../api/mockData";

const EmpoweringFamilies = () => (
  <div className="bg-[#F4F4F4] w-full py-20">
    <PartnersBanner
      image={"/assets/images/home/EmpoweringFamilies/empoweringFamilies.jpg"}
      imageAlt="Empowering Families"
      title={"Empowering Families with\nGuardian Life Insurance."}
      description={
        "Join 10,000+ families that trust us —\n" +
        "the industry leader in microinsurance.\n" +
        "Affordable protection for all —\n" +
        "empowering underserved communities."
      }
      buttonLabel="Check Services"
      buttonTo="/micro"
      partners={partners2}
      reversed={true}
      maxWidth="max-w-[1440px]"
    />
  </div>
);

export default EmpoweringFamilies;
