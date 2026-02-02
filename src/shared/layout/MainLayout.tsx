import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer.tsx";

const MainLayout = () => {
  return (
    <>
      <header className="app-header">

      </header>

      <main className="app-main">
        <Outlet />
      </main>
      <Footer />

      {/*<footer className="app-footer">*/}
      {/*  © 2026 GuardianLife*/}
      {/*</footer>*/}
    </>
  );
};

export default MainLayout;
