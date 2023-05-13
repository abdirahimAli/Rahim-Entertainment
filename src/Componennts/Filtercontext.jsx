import { React, createContext, useContext2, useState } from "react";

const Globalcontext = createContext();

// custome hook to make using conext easyer //

export const useGlobalcontext2 = () => useContext2(Globalcontext);

const Appfiltercontext = ({ children }) => {
  const [filter, setfilter] = useState('');


  return (
    <useGlobalcontext2.Provider value={{ filter, setfilter }}>
      {children}
    </useGlobalcontext2.Provider>
  );
};

export default Appfiltercontext;
