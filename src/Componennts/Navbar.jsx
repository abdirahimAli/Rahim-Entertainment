import React from "react";
import { Link } from "react-router-dom";
// import  icon_category_tv  from '../assets/thumbnails/112/regular';

const Navbar = () => {
  return (
    <nav>
      <Link to="/"> Home</Link>
      <Link to="/movies"> movies</Link>
      <Link to="/tvshows">tvshows</Link>
      <Link to="/bookmark">bookmark</Link>
    </nav>
  );
};

export default Navbar;
