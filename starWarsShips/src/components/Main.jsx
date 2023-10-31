import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarShipList from './StarShipList'
import Films from './Films'
import Planets from './Planets'
import Characters from './Characters'
import StarShipPage from './StarShipPage'
import FilmPage from './FilmPage'
import PlanetPage from './PlanetPage'
import CharacterPage from './CharacterPage'



const Main=()=>{
return(
    <div className="routes-container">
      <Routes>
      
      <Route  path="/" element={<Home />} />

      <Route  path="/starship" element={<StarShipList  />} />
      <Route path="/starship/:id" element={<StarShipPage />}/>

      <Route  path="/films" element={<Films  />} />
      <Route  path="/films/:id" element={<FilmPage  />} />

      <Route  path="/planets" element={<Planets  />} />
      <Route  path="/planets/:id" element={<PlanetPage  />} />

      <Route  path="/characters" element={<Characters  />} />
      <Route  path="/characters/:id" element={<CharacterPage  />} />

      </Routes>
    </div>
)

}

export default Main