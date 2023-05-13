import React from "react";
import { Link } from "react-router-dom";
import { MdLocalMovies } from "@react-icons/all-files/Md/MdLocalMovies";
import { AiOutlineHome } from "react-icons/Ai";
import { RiComputerFill } from "react-icons/Ri";
import { BsFillBookmarkFill } from "react-icons/Bs";
import { BiMovie } from "react-icons/Bi";
import avtar from '../assets/image-avatar.png'

const Navbar = () => {
  return (
    <nav>
      <div style={{ color: (252, 71, 71) }}>
        <BiMovie className="entertainment-icon" />
      </div>

      <Link className="home-nav" to="/">
        <AiOutlineHome />
      </Link>
      <Link to="/movies">
        <MdLocalMovies />
      </Link>
      <Link to="/tvshows">
        <RiComputerFill />
      </Link>
      <Link to="/bookmark">
        <BsFillBookmarkFill />
      </Link>

      <div>
        <img className="avatar-logo" src={avtar}/>
      </div>
    </nav>
  );
};

export default Navbar;
