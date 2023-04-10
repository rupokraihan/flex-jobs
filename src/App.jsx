import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./NavBar/NavBar";
import Home from "./Home/Home";
import Statistics from "./Statistics/Statistics";
import NavBar from "./NavBar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Outlet />
    </div>
  );
};

export default App;
