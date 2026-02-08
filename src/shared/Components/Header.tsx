import ActionButton from "./BaseButton.tsx";

type HeaderProps = {
  backgroundImage: string;
  title: React.ReactNode;
};

const Header = ({ backgroundImage, title }: HeaderProps) => {
  return (
    <header className="relative h-[839px] w-auto overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Header background"
        className="absolute inset-0 h-[839px] object-cover scale-110 w-full"
      />

      {/* Orange Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F37021]/90 via-[#F37021]/70 to-[#F37021]/40" />

      {/* Top Navigation */}
      <div className="relative z-10 flex items-center justify-between px-8 pt-6">
        {/* Menu */}
        <button className="text-white text-2xl">☰</button>

        {/* Logo */}
        <div className="bg-[#F37021] px-6 py-3 rounded-b-2xl">
          <span className="text-white font-bold tracking-wide">
            🌳 GUARDIAN
          </span>
        </div>

        {/* Login */}
        <button className="bg-[var(--color-primary)] text-[#FFFFFF] px-6 py-2 rounded-full font-medium">
          Login
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center px-8">
        <div className="max-w-xl text-white">
          {title}

          <div className="mt-8 flex gap-4">
            <ActionButton
              text="Explore Our Products"
              className="w-[220px]"
              onClick={() => console.log("explore")}
            />

            <ActionButton
              text="Get A Quote"
              className="w-[180px]"
              onClick={() => console.log("quote")}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
