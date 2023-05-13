import React from "react";
import { useGlobalcontext } from "../Componennts/Context"
// import { useGlobalcontext2 } from '../Componennts/Filtercontext';
import styled from "styled-components";
import Showlist from "../Componennts/Showlist";
import showsData from "../Data";

const Home = () => {
const { searchshow, setSearchShow } = useGlobalcontext();

const Trendingshows = showsData.filter((show) => {
  return show.isTrending == true;
});


 const Recommendedshows = showsData.filter((show) => {
   return show.isTrending != true;
 });

  return (
    <Homepage>
      <article className="Showlist">
        {searchshow === "home-nav" && (
          <div>
            <h2 className="trending">Trending</h2>
            <Showlist data={Trendingshows} />

            <h2 className="recmmoded"> Recommonded for you</h2>
          </div>
        )}

        <Showlist data={Recommendedshows} />
      </article>
    </Homepage>
  );
};

const Homepage = styled.div`
  margin: 0;
`;
export default Home;
