import { Route,Routes,BrowserRouter } from "react-router-dom";
import {Home, Movies, Tvshows, Bookmark } from './Pages'
import Sharedoutlet from "./Componennts/Sharedoutlet";
import './App.css'


function App() {
 return (
   <BrowserRouter>
     <Routes>
       {/* here will be shared layout components */}

       <Route path="/" element={<Sharedoutlet />}>
         <Route index element={<Home />} />
         <Route path="/movies" element={<Movies />} />
         <Route path="/tvshows" element={<Tvshows />} />
         <Route path="/bookmark" element={<Bookmark />} />
         <Route path="*" element={<div>Error</div>} />
       </Route>
     </Routes>
   </BrowserRouter>
 ); 


}

export default App
