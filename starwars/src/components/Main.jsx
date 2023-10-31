import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import StarshipList from "./StarshipList";
import ShowShip from "./ShowShip";
import ErrorNotFoundPage from "./ErrorNotFoundPage";

function Main() {
  return (
    <div className='Main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starships/:id' element={<ShowShip />} />
        {/*  <Route path='/films' element={<Films />} />
        <Route path='/planets' element={<Planets />} />*/}
        <Route path='/people/:id' element={<People />} /> 
        <Route path='*' exact={true} element={<ErrorNotFoundPage />} />
      </Routes>
    </div>
  );
}

export default Main;
