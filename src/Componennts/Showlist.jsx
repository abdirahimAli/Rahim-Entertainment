import React from 'react'
import showsData from '../Data';
import Show from './Show';

const Showlist = ({data}) => {
  return (
    <div>
    {data.map((show)=>{
return <Show key={show.key} {...show} />;


    })}
      
    </div>
  );
}

export default Showlist