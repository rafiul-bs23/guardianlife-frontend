import Header from "../../shared/Components/Header.tsx";
import HeaderImage from "../../assets/images/category/headerImage.jpg"

const QuickBuyCategory = () => {
  return (
    <div>
      <Header
        backgroundImage={HeaderImage}
        title={
          <h1 className="text-4xl font-bold leading-tight">
            SECURE YOUR <span className="text-[#1E3161]">FAMILY’S FUTURE</span>, <br />
            PLAN YOUR RETIREMENT, OR <br />
            PROTECT YOUR HEALTH — <br />
            <span className="text-[#1E3161]">WE’VE GOT YOU COVERED.</span>
          </h1>
        }
      />

      <div>
        <p>term life insurance</p>
        <p className="font-normal text-[24px] leading-[32px] text-center tracking-[0.02em] text-black">Get instant coverage with our digital-first policies. Complete your purchase online in minutes with immediate policy issuance.</p>
      </div>

      <h1>QuickBuyCategory</h1>
      <p>
        Welcome to GuardianLife. This is the QuickBuyCategory page.
      </p>
    </div>
  );
};

export default QuickBuyCategory;
