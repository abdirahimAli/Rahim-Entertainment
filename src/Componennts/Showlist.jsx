import React from 'react'
import showsData from '../Data';
import Show from './Show';
import {useGlobalcontext} from "../Componennts/Context"
import { useState } from "react";

const Showlist = ({data}) => {

 const { searchshow, setSearchShow } = useGlobalcontext();


  return (
    <article className="showlist-div">
      {data.map((show) => {
        return <Show key={show.key} {...show} />;
      })}
    </article>
  );
}

export default Showlist