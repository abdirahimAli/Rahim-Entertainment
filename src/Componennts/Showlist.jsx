import React from 'react'
import showsData from '../Data';
import Show from './Show';
import {useGlobalcontext} from "../Componennts/Context"
import { useState } from "react";

const Showlist = ({data}) => {

 const { searchshow, setSearchShow } = useGlobalcontext();
//  setSearchShow("abdi");
// console.log(searchshow);

// const newdata = data.filter((show)=>{
// return show.isTrending==true;
// // show.hasOwnProperty("isTrending");
// })
// console.log(newdata);

  return (
    
    <section className='showlist-div'>
      {data.map((show) => {
        return <Show key={show.key} {...show} />;
      })}
    </section>
  );
}

export default Showlist