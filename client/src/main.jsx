import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllNews from "./components/News/AllNews.jsx";
import TestGrid from "./components/News/test.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <AllNews />
      </>
    ),
  },
  {
    path: "/test",
    element: <TestGrid />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
