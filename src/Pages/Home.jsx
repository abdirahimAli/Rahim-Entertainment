import React, { useState } from "react";
import { useGlobalcontext } from "../Componennts/Context";
import styled from "styled-components";
import Showlist from "../Componennts/Showlist";
import showsData from "../Data";
import { useGlobalcontext2 } from "../Componennts/Searchingcontex";

const Home = () => {
  const { search, setSearch } = useGlobalcontext2();
  // change first letter into upper case //
  // var a = search.split(" ");

  // let c = a[0].toUpperCase();
  // let b=0;
  // (a.length<2) ? b = search.replace(a[0], c) : null;

  // console.log('bb', b);
  // a = [];

  // setSearch(b)

  // For Trending content //
  let Trendingshows = showsData.filter((show) => {
    return show.isTrending == true;
  });
  //  Randomised the Trending //
  for (let i = Trendingshows.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = Trendingshows[i];
    Trendingshows[i] = Trendingshows[j];
    Trendingshows[j] = k;
  }

  // For Recommend content //
  const array = showsData.filter((show) => {
    return show.isTrending != true;
  });
  //  Randomised the recommedation //
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = array[i];
    array[i] = array[j];
    array[j] = k;
  }

  let count = Math.floor(Math.random(array.length) * 10 + 1);

  let Recommendedshows = [];
  for (let i = 0; i < count; i++) {
    Recommendedshows.push(array[i]);
  }

  // For searched content //
  // const searchedcontent = showsData.filter((show) => {
  //   return show.title == search;
  // });

  // if (searchedcontent[0]) {
  //   Trendingshows = searchedcontent;
  //   console.log("check", searchedcontent);
  // }

  // capitalize function //
  const capitalize_first_letter = (search) => {
    let b = search.slice(0, 1);
    let e = b.toUpperCase();
    let d = search.replace(search[0], e);
    console.log("d", d);

    return d;
  };

  //  Filter for letters //

  let checkletters = showsData.filter((index) => {
    const char = index.title;
    const Length = search.length;
    return char.slice(0, Length) == capitalize_first_letter(search);
  });
  // console.log("testing", checkletters);

  return (
    <Homepage>
      <article className="Showlist">
        <div>
          {!search ? (
            <div>
              <h2 className="trending">Trending</h2>

              <div className="home-Showlist">
                <Showlist data={Trendingshows} />
              </div>
            </div>
          ) : (
            <div>
              <h2 className="trending">Results...</h2>

              <div className="home-Showlist">
                <Showlist data={checkletters} />
              </div>
            </div>
          )}

          {checkletters.length == 0 ? (
            <h2 className="no-reults">sorry... No results found</h2>
          ) : null}

          <div className="home-div2">
            <h2 className="recmmoded"> Recommonded for you...</h2>
            <Showlist data={Recommendedshows} />
          </div>
        </div>
      </article>
    </Homepage>
  );
};

const Homepage = styled.div`
  margin: 0;
`;
export default Home;
