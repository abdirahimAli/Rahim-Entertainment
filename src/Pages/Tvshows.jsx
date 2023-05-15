import React from "react";
import styled from "styled-components";
import Showlist from "../Componennts/Showlist";
import showsData from "../Data";
import { useGlobalcontext2 } from "../Componennts/Searchingcontex";

const Tvshows = () => {
  const { search } = useGlobalcontext2();

  //Searching for TV shows category  //

  let Teleshows = showsData.filter((show) => {
    return show.category == "TV Series";
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
  let Teleshows2 = Teleshows.filter((index) => {
    const char = index.title;
    const Length = search.length;

    return char.slice(0, Length) == capitalize_first_letter(search);
  });

  return (
    <Tv_shows>
      <article className="Showlist">
        <h2 className="tvshows-title">{!search ? "TV shows" : "Results..."}</h2>
        {Teleshows2.length == 0 ? (
          <h2 className="Movie-no-reults">Sorry No results found</h2>
        ) : null}

        <div className="Showlist-tvshows">
          <Showlist data={Teleshows2} />
        </div>
      </article>
    </Tv_shows>
  );
};
const Tv_shows = styled.div`
  margin: 0;
`;
export default Tvshows;
