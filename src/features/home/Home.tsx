import sponsore1 from "../../assets/images/home/sponsore1.png";
import sponsore2 from "../../assets/images/home/sponsore2.png";
import sponsore3 from "../../assets/images/home/sponsore3.png";
import guideYou from "../../assets/images/home/guide-you.png";
import ActionButton from "../../shared/Components/BaseButton.tsx";
import HomeHeader from "./components/HomeHeader";
import { MOCK_HOME_HEADER_DATA } from "./api/mockData";

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

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 h-auto lg:h-[437px] w-full mt-16 lg:mt-[140px] px-4 lg:px-0">
          <div className="flex-1 rounded-tr-[32px] rounded-br-[32px] rounded-[32px] lg:rounded-none lg:rounded-tr-[32px] lg:rounded-br-[32px] overflow-hidden hidden md:block">
            <img
              src={guideYou}
              alt="Sample"
              className="w-full h-[500px] lg:h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col py-12 lg:py-[62.5px] lg:pl-8 justify-center gap-4 px-4 text-center lg:text-left items-center lg:items-start">
            <p className="font-black text-[24px] leading-[24px] tracking-[0.2em] uppercase text-[#1E3161]">May i guide you</p>
            <p className="text-[#464646] uppercase text-[28px] lg:text-[40px] leading-[40px] lg:leading-[60px] tracking-[0.02em]">
              Let our <span className="text-orange-500">AI Assistant</span> help you <br className="hidden lg:block" />
              find the <span className="text-orange-500">best policy</span> — just <br className="hidden lg:block" />
              answer a few <span className="text-orange-500">quick questions!</span>
            </p>
            <ActionButton
              text="Find your policy"
              className=""
              onClick={() => console.log("clicked")}
            />

          </div>
        </div>
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
