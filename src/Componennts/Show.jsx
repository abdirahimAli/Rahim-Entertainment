import React from 'react'
 import img from '../assets/thumbnails/beyond-earth/regular/small.jpg'
 import showsData from "../Data";

const Show = ({ title, thumbnail, year, category, rating }) => {
//   const { title, thumbnail, year, category, rating } = show;
//   const { trending, regular } = thumbnail;
//    const { small } = regular;
    //  console.log("thumbnails",regular.small);
  //   console.log("title", title);
  //   console.log("category", category);
  return (
    <div>
      <div>
        <div>
          <img src={thumbnail} />
          <img src={thumbnail} alt={title} />
          {console.log("thumbnails", thumbnail)}
        </div>
        <div>
          <span> {year}</span>
          <span> {category}</span>
          <span> {rating}</span>
          <h3> {title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Show