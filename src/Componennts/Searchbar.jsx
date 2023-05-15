import React from "react";
import { BsSearch } from "react-icons/Bs";
import { useGlobalcontext2 } from "../Componennts/Searchingcontex";

const Searchbar = () => {
  const { search, setSearch } = useGlobalcontext2();
  return (
    <div className="searchbar">
      <span className="searchbar-icon">
        <BsSearch />
      </span>
      <input
        type="text"
        placeholder="search for movies or tv shows"
        className="search-bar"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Searchbar;
