import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../shared/layout/MainLayout";
import Home from "../features/home/Home";
import About from "../features/about/About";
import Contact from "../features/contact/Contact";
import NotFound from "../shared/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound/>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
