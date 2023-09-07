import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Landingpage from "./Pages/Landingpage";
import Header from "./Components/header";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);