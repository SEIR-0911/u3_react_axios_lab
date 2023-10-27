import { Route, Routes } from "react-router-dom";
import Starships from "./Starships";
import Home from "./Home";

function Main() {
  return (
    <div className='Main'>
      <Routes>
        <Route path='/starships' element={<Starships />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default Main;

//element={<StarshipList />}
