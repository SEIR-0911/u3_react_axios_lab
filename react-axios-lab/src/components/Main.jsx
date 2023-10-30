import { Route, Routes} from 'react-router-dom'
import StarshipList from './StarshipList'
import Home from './Home'
import ShipDetails from './ShipDetails'
import PlanetList from './PlanetList'
import PlanetDetails from './PlanetDetails'
import FilmList from './FilmList'
import FilmDetails from './FilmDetails'
import CharacterList from './CharacterList'
import CharacterDetails from './CharacterDetails'
import VehicleList from './VehicleList'
import VehicleDetails from './VehicleDetails'

export default function Main(){
    return(
        <div className="Main">
            <div className="routes-container">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/starships" element={<StarshipList/>} />
                <Route path="/starships/:id" element={<ShipDetails/>}/>
                <Route path="/planets" element={<PlanetList/>}/>
                <Route path="/planets/:id" element={<PlanetDetails/>}/>
                <Route path="/films" element={<FilmList/>}/>
                <Route path="/films/:id" element={<FilmDetails/>}/>
                <Route path="/characters" element={<CharacterList/>}/>
                <Route path="/characters/:id" element={<CharacterDetails/>}/>
                <Route path="/vehicles" element={<VehicleList/>}/>
                <Route path="/vehicles/:id" element={<VehicleDetails/>}/>
              </Routes>
            </div>
        </div>
    )
}