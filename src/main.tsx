import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import "./styles/index.css"
import { PopupProvider } from "./shared/context/PopupContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <PopupProvider>
      <RouterProvider router={router} />
    </PopupProvider>
  </React.StrictMode>
);
