import HeaderImage from "../../assets/images/category/headerImage.jpg";
import Header from "../../shared/Components/Header.tsx";
import {StatsBar} from "./components/StatsBar.tsx";
import Contentheader from "../../shared/Components/Contentheader.tsx";
import {WhatIsBancassurance} from "./components/WhatIsBancassurance.tsx";

const Banca = () => {
  return (
    <section>
      <Header
        backgroundImage={HeaderImage}
        title={
          <h1 className="text-4xl font-bold leading-tight">
            SECURE YOUR <span className="text-[#1E3161]">FAMILY’S FUTURE</span>, <br/>
            PLAN YOUR RETIREMENT, OR <br/>
            PROTECT YOUR HEALTH — <br/>
            <span className="text-[#1E3161]">WE’VE GOT YOU COVERED.</span>
          </h1>
        }
      />
      <StatsBar />
      <div className="mt-[77px]">
        <Contentheader
          title="Why Bancassurance Matters"
          description="In an evolving financial landscape, banks are increasingly exposed to credit risk while customers seek greater financial security. Bancassurance bridges this gap by integrating life insurance protection directly into banking products—ensuring continuity, protection, and long-term value for all stakeholders."
        />
        <div className="flex mt-[90px]">
          <div className="w-1/2 pl-[210px] pr-8">
            <WhatIsBancassurance />
          </div>
          <div className="w-1/2 pl-8">
            <img
              src="https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg"
              alt="image"
              className="inset-0 w-[649px] h-[505px] object-cover rounded-[35px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banca;
