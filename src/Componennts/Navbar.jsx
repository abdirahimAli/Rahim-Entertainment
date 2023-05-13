import React from "react";
import { Link } from "react-router-dom";
import { MdLocalMovies } from "@react-icons/all-files/Md/MdLocalMovies";
import { AiOutlineHome } from "react-icons/Ai";
import { RiComputerFill } from "react-icons/Ri";
import { BsFillBookmarkFill } from "react-icons/Bs";
import { BiMovie } from "react-icons/Bi";
import avtar from "../assets/image-avatar.png";
import showsData from "../Data";

import { useGlobalcontext } from "../Componennts/Context";

const Navbar = () => {
  const { searchshow, setSearchShow } = useGlobalcontext();

  return (
    <nav>
      <div style={{ color: (252, 71, 71) }}>
        <BiMovie className="entertainment-icon" />
      </div>

      <Link
        className="home-nav"
        to="/"
        onClick={() => setSearchShow("home-nav")}
      >
        <AiOutlineHome />
      </Link>
      <Link to="/movies" onClick={() => setSearchShow("movies")}>
        <MdLocalMovies />
      </Link>
      <Link to="/tvshows" onClick={() => setSearchShow("tvshows")}>
        <RiComputerFill />
      </Link>
      <Link to="/bookmark" onClick={() => setSearchShow("bookmark")}>
        <BsFillBookmarkFill />
      </Link>

      <div>
        <img className="avatar-logo" src={avtar} />
      </div>
    </nav>
  );
};

export default Navbar;
