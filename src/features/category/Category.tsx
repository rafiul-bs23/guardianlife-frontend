import Header from "../../shared/Components/Header.tsx";
import HeaderImage from "../../assets/images/category/headerImage.jpg"

const Category = () => {
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

      <h1>Category</h1>
      <p>
        Welcome to GuardianLife. This is the Category page.
      </p>
    </div>
  );
};

export default Category;
