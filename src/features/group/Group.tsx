import HeaderImage from "../../assets/images/category/headerImage.jpg";
import Header from "../../shared/Components/Header.tsx";

const Group = () => {
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
      <h1>Group</h1>
      <p>
        Welcome to GuardianLife. This is the Group page.
      </p>
    </section>
  );
};

export default Group;
