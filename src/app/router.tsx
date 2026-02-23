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
import TaxRebate from "../features/tax-rebate/TaxRebate.tsx";

export const NAV_ROUTES = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/category", label: "Category", element: <Category /> },
  { path: "/product-details", label: "Product Details", element: <ProductDetails /> },
  { path: "/quick-buy-category", label: "Quick Buy Category", element: <QuickBuyCategory /> },
  { path: "/quick-buy-details", label: "Quick Buy Details", element: <QuickBuyDetails /> },
  { path: "/group", label: "Group", element: <Group /> },
  { path: "/claim", label: "Claim", element: <Claim /> },
  { path: "/micro", label: "Micro", element: <Micro /> },
  { path: "/banca", label: "Banca", element: <Banca /> },
  { path: "/banca-city", label: "Banca City", element: <BancaCity /> },
  { path: "/about", label: "About", element: <About /> },
  { path: "/chairman", label: "Chairman", element: <Chairman /> },
  { path: "/contact", label: "Contact", element: <Contact /> },
  { path: "/employees", label: "Employees", element: <Employees /> },
  { path: "/emc", label: "Emc", element: <Emc /> },
  { path: "/mancom", label: "Mancom", element: <Mancom /> },
  { path: "/board-directors", label: "Board Directors", element: <BoardDirectors /> },
  { path: "/directors", label: "Directors", element: <Directors /> },
  { path: "/tax-rebate", label: "Tax Rebate", element: <TaxRebate /> },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      ...NAV_ROUTES.filter(r => r.path !== "/").map(r => ({
        path: r.path.startsWith("/") ? r.path.slice(1) : r.path,
        element: r.element
      })),
      { path: "category", element: <Category /> },
      { path: "quick-buy-category", element: <QuickBuyCategory /> },
      { path: "quick-buy-details", element: <QuickBuyDetails /> },
      { path: "product-details", element: <ProductDetails /> },
      { path: "group", element: <Group /> },
      { path: "emc", element: <Emc /> },
      { path: "board-directors", element: <BoardDirectors /> },
      { path: "banca-city", element: <BancaCity /> },
    ],
  },
]);
