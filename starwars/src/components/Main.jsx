import { Route, Routes } from "react-router-dom";
import StarshipList from "./StarshipList";
import Home from "./Home";
import Films from "./Films";
import Planets from "./Planets";
import People from "./People";
import ShowStarship from "./ShowShip";
function Main() {
  return (
    <div className='Main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/StarshipList' element={<StarshipList />} />

        <Route path='/StarshipList/:id' element={<ShowStarship />} />
        <Route path='/films' element={<Films />} />
        <Route path='/planets' element={<Planets />} />
        <Route path='/people' element={<People />} />
      </Routes>
    </div>
  );
}

export default Main;
