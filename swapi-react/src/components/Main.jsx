import { Route, Routes } from 'react-router-dom'
import StarshipList from './StarshipList'
import SpeciesList from './SpeciesList'
import PeopleList from './PeopleList'
import VehiclesList from './VehiclesList'
import PlanetsList from './PlanetsList'
import FilmsList from './FilmsList'
import StarshipPage from './StarshipPage'
import SpeciesPage from './SpeciesPage'
import VehiclesPage from './VehiclesPage'
import PeoplePage from './PeoplePage'
import PlanetsPage from './PlanetsPage'
import FilmsPage from './FilmsPage'
import Home from './Home'

function Main () {
    
    return (
        <div className="Main">
            <Routes>
                <Route path="/StarshipList" element={<StarshipList/>}/>
                <Route path="/StarshipList/:id" element={<StarshipPage/>}/>
                <Route path="/SpeciesList" element={<SpeciesList/>}/>
                <Route path="/SpeciesList/:id" element={<SpeciesPage/>}/>
                <Route path="/PeopleList" element={<PeopleList/>}/>
                <Route path="/PeopleList/:id" element={<PeoplePage/>}/>
                <Route path="/FilmsList" element={<FilmsList/>}/>
                <Route path="/FilmsList/:id" element={<FilmsPage/>}/>
                <Route path="/VehiclesList" element={<VehiclesList/>}/>
                <Route path="/VehiclesList/:id" element={<VehiclesPage/>}/>
                <Route path="/PlanetsList" element={<PlanetsList/>}/>
                <Route path="/PlanetsList/:id" element={<PlanetsPage/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default Main