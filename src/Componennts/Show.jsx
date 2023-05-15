import React from "react";
import img from "../assets/thumbnails/beyond-earth/regular/large.jpg";

const Show = ({ title, thumbnail, year, category, rating }) => {
  //   const { title, thumbnail, year, category, rating } = show;
  //   const { trending, regular } = thumbnail;
  //    const { small } = regular;
  //  console.log("thumbnails",regular.small);
  //   console.log("title", title);
  //   console.log("category", category);
  return (
    <div className="show">
      <div className="img-container">
        <img src={img} alt={title} />
        {/* {console.log("thumbnails", thumbnail)} */}
      </div>
      <div className="show-div-properties">
        <span className="show-properties"> {year}.</span>
        <span className="show-properties"> {category}.</span>
        <span className="show-properties"> {rating}</span>
        <h3 className="show-properties_title "> {title}</h3>
      </div>
    </div>
  );
};

export default Show;
