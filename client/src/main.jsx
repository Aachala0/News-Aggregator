import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllNews from "./components/News/AllNews.jsx";
import CountryNews from "./components/News/CountryNews.jsx";
import CategoryNews from "./components/News/CategoryNews.jsx";
import TopHeadlines from "./components/News/TopHeadlines.jsx";
import Search from "./components/search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllNews />,
      },
      {
        path: "/top-headlines",
        element: <TopHeadlines />,
      },
      {
        path: "/country/:iso",
        element: <CountryNews />,
      },
      {
        path: "/:category",
        element: <CategoryNews />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
