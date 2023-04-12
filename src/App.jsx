import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Component/NavBar/NavBar";
import Home from "./Component/Home/Home";
import NavBar from "./Component/NavBar/NavBar";
import Footer from "./Component/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <ToastContainer/>
      <Footer/>
    </div>
  );
};

export default App;
