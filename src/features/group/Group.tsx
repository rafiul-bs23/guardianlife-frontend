import HeaderImage from "../../assets/images/category/headerImage.jpg";
import Header from "../../shared/Components/Header.tsx";
import Contentheader from "../../shared/Components/Contentheader.tsx";
import BenefitsList from "./Benefits.tsx";

const Group = () => {
  return (
    <div>
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
      <div className="mt-[84px]">
        <Contentheader
          title="Why Group Insurance Matters for Your Organization"
          description="A Smarter Way to Care for Your Employees"
        />
      </div>

      <div className="flex mt-[90px]">
        <div className="w-1/2 pl-[211px] pr-8 ">
          <div className="max-w-[696px]">
            <BenefitsList/>
          </div>
        </div>
        <div className="w-1/2 pl-8">
          <img
            src="https://img.freepik.com/free-photo/businesspeople-having-good-time-meeting_1098-1786.jpg?semt=ais_hybrid"
            alt="Header background"
            className="inset-0 h-[554px] w-[712px] object-cover rounded-[35px]"
          />
        </div>
      </div>

    </div>
  );
};

export default Group;
