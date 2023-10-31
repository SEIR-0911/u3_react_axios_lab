import { Route, Routes } from 'react-router-dom';
import StarshipList from './StarshipList';
import StarshipDetails from './StarshipDetails';
import Home from './Home';
import Films from './Films';
import FilmDetails from './FIlmDetails'
import Planets from './Planets';
import PlanetsDetails from './PlanetsDetails';
import Characters from './Characters';
import CharacterDetails from './CharacterDetails';


function Main() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/starships" element={<StarshipList />}/>
        <Route path="/starships/:id" element={<StarshipDetails />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<FilmDetails />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:id" element={<PlanetsDetails />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default Main;
