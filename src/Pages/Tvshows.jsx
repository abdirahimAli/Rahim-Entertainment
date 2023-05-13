import React from "react";
import styled from "styled-components";
import Showlist from "../Componennts/Showlist";
import showsData from "../Data";

const Tvshows = () => {
  const Teleshows = showsData.filter((show) => {
    return show.category == "TV Series";
  });

  return (
    <Tv_shows>
      <Showlist data={Teleshows} />
    </Tv_shows>
  );
};
const Tv_shows = styled.div`
  margin: 0;
`;
export default Tvshows;
