import React from "react";
import styled from "styled-components";
import Showlist from "../Componennts/Showlist";
import showsData from "../Data";
import { useGlobalcontext2 } from "../Componennts/Searchingcontex";

const Movies = () => {
  const { search } = useGlobalcontext2();

  // Searching for Movie category // 
  let Movieshows = showsData.filter((show) => {
    return show.category == "Movie";
  });
  // capitalize function //
  const capitalize_first_letter = (search) => {
    let b = search.slice(0, 1);
    let e = b.toUpperCase();
    let d = search.replace(search[0], e);
    console.log("d", d);

    return d;
  };

  //  Filter for letters //
  let Movieshows2 = Movieshows.filter((index) => {
    const char = index.title;
    const Length = search.length;

    return char.slice(0, Length) == capitalize_first_letter(search);
  });

  return (
    <Movie>
      <article className="Showlist">
        <h2 className="movies-title">{!search ? "Movies" : "Results..."}</h2>
        {Movieshows2.length == 0 ? (
          <h2 className="Movie-no-reults">Sorry No results found</h2>
        ) : null}

        <div className="Showlist-movies">
          <Showlist data={Movieshows2} />
        </div>
      </article>
    </Movie>
  );
};
const Movie = styled.div`
  margin: 0;
`;

export default Movies;
