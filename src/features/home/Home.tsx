import bannerVideo from "../../assets/video/watermarked_preview.mp4";
import sponsore1 from "../../assets/images/home/sponsore1.png";
import sponsore2 from "../../assets/images/home/sponsore2.png";
import sponsore3 from "../../assets/images/home/sponsore3.png";
import guideYou from "../../assets/images/home/guide-you.png";
import ActionButton from "../../shared/Components/BaseButton.tsx";

import Solutions from "./components/Solutions.tsx";
import PartnersBanks from "./components/PartnersBanks.tsx";
import BusinessPartners from "./components/BusinessPartners.tsx";
import EmpoweringFamilies from "./components/EmpoweringFamilies.tsx";
import AppPromotion from "./components/PromotionSection.tsx";
import ContactForm from "./components/contact.tsx";

const Home = () => {
  return (
    <div>
      <div className="h-[1080px]">
        <video src={bannerVideo} autoPlay muted loop playsInline={true} className="inset-0 h-full w-full object-cover text-transparent"></video>
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-[98px] mb-[60px]">
          <p className="not-italic font-black text-[24px] leading-[24px] tracking-[0.2em] uppercase text-[#1E3161]">sponsored by</p>
        </div>
        <div className="flex justify-center gap-[200px] h-[223px]">
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

        <div className="flex gap-8 h-[437px] w-full mt-[140px]">
          <div className="flex-1 rounded-tr-[32px] rounded-br-[32px]">
            <img
              src={guideYou}
              alt="Sample"
              className="w-full h-full object-cover rounded-tr-[32px] rounded-br-[32px]"
            />
          </div>
          <div className="flex-1 flex flex-col py-[62.5px] pl-8 justify-center gap-4">
            <p className="font-black text-[24px] leading-[24px] tracking-[0.2em] uppercase text-[#1E3161]">May i guide you</p>
            <p className="text-[#464646] uppercase text-[40px] leading-[60px] tracking-[0.02em]">
              Let our <span className="text-orange-500">AI Assistant</span> help you <br />
              find the <span className="text-orange-500">best policy</span> — just <br />
              answer a few <span className="text-orange-500">quick questions!</span>
            </p>
            <ActionButton
              text="Find your policy"
              className="w-[249px]"
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
