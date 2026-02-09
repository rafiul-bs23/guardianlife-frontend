import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../shared/layout/MainLayout";
import Home from "../features/home/Home";
import About from "../features/about/About";
import Contact from "../features/contact/Contact";
import NotFound from "../shared/pages/NotFound";
import Category from "../features/category/Category.tsx";
import QuickBuyCategory from "../features/quick-buy-category/QuickBuyCategory.tsx";
import QuickBuyDetails from "../features/quick-buy-details/QuickBuyDetails.tsx";
import ProductDetails from "../features/product-details/ProductDetails.tsx";
import Micro from "../features/micro/Micro.tsx";
import Mancom from "../features/mancom/Mancom.tsx";
import Group from "../features/group/Group.tsx";
import Employees from "../features/employees/Employees.tsx";
import Emc from "../features/emc/Emc.tsx";
import Directors from "../features/directors/Directors.tsx";
import Claim from "../features/claim/Claim.tsx";
import Chairman from "../features/chairman/Chairman.tsx";
import BoardDirectors from "../features/board-directors/BoardDirectors.tsx";
import BancaCity from "../features/banca-city/BancaCity.tsx";
import Banca from "../features/banca/banca.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound/>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "category", element: <Category /> },
      { path: "quick-buy-category", element: <QuickBuyCategory/> },
      { path: "quick-buy-details", element: <QuickBuyDetails /> },
      { path: "product-details", element: <ProductDetails /> },
      { path: "micro", element: <Micro /> },
      { path: "mancom", element: <Mancom /> },
      { path: "group", element: <Group /> },
      { path: "employees", element: <Employees /> },
      { path: "emc", element: <Emc /> },
      { path: "directors", element: <Directors /> },
      { path: "claim", element: <Claim /> },
      { path: "chairman", element: <Chairman /> },
      { path: "board-directors", element: <BoardDirectors /> },
      { path: "banca", element: <Banca /> },
      { path: "banca-city", element: <BancaCity /> },
    ],
  },
]);
