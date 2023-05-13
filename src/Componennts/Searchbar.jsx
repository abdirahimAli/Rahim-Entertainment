import React from 'react'
import { useGlobalcontext } from "../Componennts/Context";
// import styled from "styled-components";

// const hadleshow = (e)=>{
// console.log('working')
// // setShow(e.target.value)
// console.log(e);
// }

const Searchbar = () => {
  const { show,setShow } = useGlobalcontext();
  return (
    // <search_bar_style>
      <div>
        Searchbar
        <input
          type="text"
          className="search-bar"
          value={show}
          onChange={(e) => {
            setShow(e.target.value);
          }}
        ></input>
      </div>
    // </search_bar_style>
  );
}


// const Search_bar_style = styled.div`
//   height: 5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

export default Searchbar