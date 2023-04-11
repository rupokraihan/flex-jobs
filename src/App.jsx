import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Component/NavBar/NavBar";
import Home from "./Component/Home/Home";
import Statistics from "./Component/Statistics/Statistics";
import NavBar from "./Component/NavBar/NavBar";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;
