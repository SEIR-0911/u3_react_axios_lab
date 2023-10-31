import { Route, Routes } from "react-router-dom";
import StarshipList from "./StarshipList";
import Home from "./Home";
import StarshipDetails from "./StarshipDetails";
import Planets from "./Planets";
import PlanetDetails from "./PlanetDetails";
import Films from "./Films";
import FilmDetails from "./FilmDetails";
import Characters from "./Characters";
import CharacterDetails from "./CharacterDetails";
import Vehicles from "./Vehicles";
import VehicleDetails from "./VehicleDetails";

export default function Main() {
  return (
    <div>
      <Routes>
        //routes set up what component(s) are rendered when a link (set up in
        nav or somewhere else in our app) is clicked
        <Route path="/starships" element={<StarshipList />} /> //renders the
        component StarshipList when this link /starships is loaded
        <Route path="/" element={<Home />} /> //renders the home component when
        this link / is rendered in the browser
        <Route path="/starships/:id" element={<StarshipDetails />} />
        <Route path="/planets/:id" element={<PlanetDetails />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<FilmDetails />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/:id" element={<VehicleDetails />} />
      </Routes>
    </div>
  );
}
