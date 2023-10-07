import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-112px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
