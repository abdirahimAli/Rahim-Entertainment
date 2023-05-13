import { React, createContext, useContext, useState } from "react";

const Globalcontext = createContext();

// custome hook to make using conext easyer //

export const useGlobalcontext = () => useContext(Globalcontext);

const AppContext = ({ children }) => {
  const [searchshow, setSearchShow] = useState("hhooho");

console.log(searchshow);
  return (
    <Globalcontext.Provider value={{ searchshow, setSearchShow }}>
      {children}
    </Globalcontext.Provider>
  );
};

export default AppContext;
