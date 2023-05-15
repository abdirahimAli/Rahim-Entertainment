import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppContext from './Componennts/Context'
import Searchingcontex from './Componennts/Searchingcontex'
// import Appfiltercontext from "./Componennts/Filtercontext";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Searchingcontex>
  <AppContext>
  
    <App />

</AppContext>
</Searchingcontex>
  // </React.StrictMode>
);
