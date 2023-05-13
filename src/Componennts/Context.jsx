import {React,createContext,useContext,useState} from 'react'

const Globalcontext = createContext();

// custome hook to make using conext easyer //

export const useGlobalcontext = ()=> useContext(Globalcontext);

const AppContext = ({children}) => {
const [show,setShow] = useState("");
 console.log(show);

 

  return (
    <Globalcontext.Provider value={{ show, setShow }}>
        {children}
    </Globalcontext.Provider>
  );
}

export default AppContext