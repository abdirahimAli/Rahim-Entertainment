import React from "react";
import  img from "/asset/small.jpg";

const Show = ({ title, small, year, category, rating }) => {
  return (
    <div className="show">
      <div className="img-container">
        <span>
          <img src={small} alt={title} />
        </span>
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
