import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import StarshipList from "./StarshipList";
import ShowShip from "./ShowShip";
import People from "./People";
import ErrorNotFoundPage from "./ErrorNotFoundPage";
import Header from "./Header";

function Main() {
  return (
    <div>
      <Header />
      <div className='Main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/starships' element={<StarshipList />} />
          <Route path='/starships/:id' element={<ShowShip />} />
          <Route path='/people' element={<People />} />
          <Route path='/people/:id' element={<People />} />
          {/*  <Route path='/films' element={<Films />} />
        <Route path='/planets' element={<Planets />} />*/}
          <Route path='*' exact={true} element={<ErrorNotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
