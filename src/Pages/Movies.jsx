import React from 'react'
import styled from "styled-components";
import Showlist from "../Componennts/Showlist";
import showsData from "../Data";

const Movies = () => {

  const Movieshows = showsData.filter((show) => {
    return show.category == "Movie";
  });

  return (
    <Movie>
      <Showlist data={Movieshows} />
    </Movie>
  );
}
const Movie = styled.div`
  margin: 0;
`;

export default Movies