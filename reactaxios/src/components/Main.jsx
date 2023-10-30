import { Route, Routes } from 'react-router-dom'
import StarshipList from './StarshipList'
import SpeciesList from './SpeciesList'
import PeopleList from './PeopleList'
import VehiclesList from './VehiclesList'
import PlanetsList from './PlanetsList'
import FilmsList from './FilmsList'
import Home from './Home'

function Main () {
    
    return (
        <div className="Main">
            <Routes>
                <Route path="/StarshipList" element={<StarshipList/>}/>
                <Route path="/SpeciesList" element={<SpeciesList/>}/>
                <Route path="/PeopleList" element={<PeopleList/>}/>
                <Route path="/FilmsList" element={<FilmsList/>}/>
                <Route path="/VehiclesList" element={<VehiclesList/>}/>
                <Route path="/PlanetsList" element={<PlanetsList/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default Main