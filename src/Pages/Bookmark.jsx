import React from "react";
import styled from "styled-components";
import Showlist from "../Componennts/Showlist";
import showsData from "../Data";
import { useGlobalcontext2 } from "../Componennts/Searchingcontex";

const Bookmark = () => {
  const { search } = useGlobalcontext2();

  // Rendring Shows //
  let Bookmarks = showsData.filter((show) => {
    return show.isBookmarked == true;
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
  let Bookmarks2 = Bookmarks.filter((index) => {
    const char = index.title;
    const Length = search.length;

    return char.slice(0, Length) == capitalize_first_letter(search);
  });

  return (
    <Book_mark>
      <article className="Showlist">
        <h2 className="bookmark-title">
          {!search ? "Bookmarks" : "Results..."}
        </h2>
        {Bookmarks2.length == 0 ? (
          <h2 className="Movie-no-reults">Sorry No results found</h2>
        ) : null}

        <div className="Showlist-Bookmarks">
          <Showlist data={Bookmarks2} />
        </div>
      </article>
    </Book_mark>
  );
};

const Book_mark = styled.div`
  margin: 0;
`;
export default Bookmark;
