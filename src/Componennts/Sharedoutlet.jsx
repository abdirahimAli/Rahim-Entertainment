import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Componennts/Navbar";
import Searchbar from "./Searchbar";
 

const Sharedoutlet = () => {
return (
  <div className="Sharedlayout">
    <Navbar />
    <Searchbar />

    <Outlet />
    <div>
      
      <Searchbar />
    </div>
  </div>
);
};
export default Sharedoutlet;
