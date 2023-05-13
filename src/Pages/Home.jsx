import React from "react";
import { useGlobalcontext } from "../Componennts/Context";
import showsData from '../Data';
import Showlist from "../Componennts/Showlist";
import styled from "styled-components";


const Home = () => {
// const {show} = useGlobalcontext();
//  console.log(showsData[0]); 


  return (
    <Homepage>
      <div>
        <Showlist data={showsData} />
      </div>
    </Homepage>
  );
};

export default Home;


const Homepage= styled.div`
margin : 0;
background-color: 22,29,47;




`