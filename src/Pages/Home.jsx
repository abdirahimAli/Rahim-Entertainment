import React from "react";
import { useGlobalcontext } from "../Componennts/Context";
import showsData from "../Data";
import Showlist from "../Componennts/Showlist";
import styled from "styled-components";

const Home = () => {
  // const {show} = useGlobalcontext();
  //  console.log(showsData[0]);

  return (
    <Homepage>
      <Showlist data={showsData} />
    </Homepage>
  );
};

const Homepage = styled.div`
  margin: 0;
`;
export default Home;
