import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
