import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer.tsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MainLayout = () => {
  return (
    <>
      <header className="app-header">

      </header>

      <main className="app-main">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
