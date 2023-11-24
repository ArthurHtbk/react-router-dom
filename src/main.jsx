import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { browseApi } from "./services/apiManager.js";

import Home from "./pages/Home.jsx";
import Characters from "./pages/Characters.jsx";
import Locations from "./pages/Locations.jsx";
import Episodes from "./pages/Episodes.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/character/:pagenumber",
        element: <Characters />,
        loader: browseApi,
      },
      {
        path: "/location/:pagenumber",
        element: <Locations />,
        loader: browseApi,
      },
      {
        path: "/episode/:pagenumber",
        element: <Episodes />,
        loader: browseApi,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
