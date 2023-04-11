import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Component/NavBar/NavBar";
import Home from "./Component/Home/Home";
import Statistics from "./Component/Statistics/Statistics";
import NavBar from "./Component/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
