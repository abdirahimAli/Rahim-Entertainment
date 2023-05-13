import React from 'react'
import styled from "styled-components";
import Showlist from "../Componennts/Showlist";
import showsData from "../Data";
const Bookmark = () => {
  
const Bookmarks = showsData.filter((show) => {
  return show.isBookmarked == true;
});

  return (
    <Book_mark>
      <Showlist data={Bookmarks} />
    </Book_mark>
  );
}

const Book_mark = styled.div`
  margin: 0;
`;
export default Bookmark