import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Componennts/Navbar";
import Searchbar from "./Searchbar";
import Showlist from "../Componennts/Showlist";
import showsData from "../Data";

import { useGlobalcontext } from "../Componennts/Context";

const Sharedoutlet = () => {
  return (
    <section className="Sharedlayout">
      <Navbar />
      <Searchbar />
      <Outlet />
    </section>
  );
};
export default Sharedoutlet;
