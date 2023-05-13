import React from 'react'
import { useGlobalcontext } from "../Componennts/Context";
import {BsSearch} from 'react-icons/Bs'
// import styled from "styled-components";

// const hadleshow = (e)=>{
// console.log('working')
// // setShow(e.target.value)
// console.log(e);
// }

const Searchbar = () => {
  const { show,setShow } = useGlobalcontext();
  return (
    <div className="searchbar">
      <span className='searchbar-icon'>
        <BsSearch />
      </span>
      <input
        type="text"
        placeholder="search for movies or tv shows"
        className="search-bar"
        value={show}
        onChange={(e) => {
          setShow(e.target.value);
        }}
      ></input>
    </div>
  );
}




export default Searchbar