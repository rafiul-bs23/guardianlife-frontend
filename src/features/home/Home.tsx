import sponsore1 from "../../assets/images/home/sponsore1.png";
import sponsore2 from "../../assets/images/home/sponsore2.png";
import sponsore3 from "../../assets/images/home/sponsore3.png";
import HomeHeader from "./components/HomeHeader";
import GuideYou from "./components/GuideYou";
import { MOCK_HOME_HEADER_DATA, MOCK_GUIDE_YOU_DATA } from "./api/mockData";

import Solutions from "./components/Solutions.tsx";
import PartnersBanks from "./components/PartnersBanks.tsx";
import BusinessPartners from "./components/BusinessPartners.tsx";
import EmpoweringFamilies from "./components/EmpoweringFamilies.tsx";
import AppPromotion from "./components/PromotionSection.tsx";
import ContactForm from "./components/contact.tsx";

const Home = () => {

  return (
    <div className="min-h-screen bg-white">
      <HomeHeader data={MOCK_HOME_HEADER_DATA} />
      <div className="flex flex-col items-center">
        <div className="mt-16 lg:mt-[98px] mb-[60px]">
          <p className="not-italic font-black text-[24px] leading-[24px] tracking-[0.2em] text-center lg:text-left uppercase text-[#1E3161]">sponsored by</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-[200px] min-h-[223px] px-4">
          <img
            src={sponsore1}
            alt="sponsore-1"
            className="mx-auto w-auto h-[182px] my-auto"
          />
          <img
            src={sponsore2}
            alt="sponsore-2"
            className="mx-auto w-auto h-[114px] my-auto"
          />
          <img
            src={sponsore3}
            alt="sponsore-3"
            className="mx-auto w-auto h-[223px] my-auto"
          />
        </div>

        <GuideYou data={MOCK_GUIDE_YOU_DATA} />
      </div>
      <Solutions />
      <PartnersBanks />
      <BusinessPartners />
      <EmpoweringFamilies />
      <AppPromotion />
      <ContactForm />
    </div>
  );
};

export default Home;
