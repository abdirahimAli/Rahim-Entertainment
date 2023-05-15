import { React, createContext, useContext, useState } from "react";

const Globalcontext = createContext();

// custome hook to make using conext easyer //

export const useGlobalcontext = () => useContext(Globalcontext);

const AppContext = ({ children }) => {
  const [catagoreyfilter, setCatagoreyfilter] = useState("hhooho");

// console.log(searchshow);
  return (
    <Globalcontext.Provider value={{ catagoreyfilter, setCatagoreyfilter }}>
      {children}
    </Globalcontext.Provider>
  );
};

export default AppContext;
