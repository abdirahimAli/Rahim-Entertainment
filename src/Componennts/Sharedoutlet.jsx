import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Componennts/Navbar";
import Searchbar from "./Searchbar";
 

const Sharedoutlet = () => {
return (
    <div>
      <Navbar />
      <Searchbar/>

      <Outlet />
    </div>
  );
};
export default Sharedoutlet;
