import { React, createContext, useContext, useState } from "react";

const Globalcontext2 = createContext();

// custome hook to make using conext easyer //

export const useGlobalcontext2 = () => useContext(Globalcontext2);

const Searchingcontex = ({ children }) => {
  const [search, setSearch] = useState("");

  // console.log(searchshow);
  return (
    <Globalcontext2.Provider value={{ search, setSearch }}>
      {children}
    </Globalcontext2.Provider>
  );
};

export default Searchingcontex;
