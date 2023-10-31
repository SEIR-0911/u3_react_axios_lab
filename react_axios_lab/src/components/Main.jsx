import { Navigate, Route, Routes } from "react-router-dom"
import  Home  from './Home'
import  StarshipsList  from './StarshipList'
import Vehicles from "./Vehicles"
import StarshipList from "./StarshipList"
import Planets from "./Planets"
import People from "./People"
import Films from "./Films"
import Species from "./Species"
import StarshipPage from "./StarshipPage"
import FilmPage from "./FilmPage"
import VehiclePage from "./VehiclesPage"
import PlanetPage from './PlanetPage'
import PeoplePage from "./PeoplePage"
import SpeciesPage from "./SpeciesPage"
import NotFound from "./NotFound"

export default function Main (props) {
    return(
        <div className="Main">
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/Planets' element={<Planets planets={props.planets} />}></Route>
                <Route path='/StarshipList' element={<StarshipsList ships={props.starships} />}></Route>
                <Route path='/Vehicles' element={<Vehicles vehicles={props.vehicles} />}></Route>
                <Route path='/People' element={<People people={props.people} />}></Route>
                <Route path='/Films' element={<Films films={props.films} />}></Route>
                <Route path='/Species' element={<Species species={props.species} />}></Route>
                <Route path='/StarshipList/:id' element={<StarshipPage starships={props.starships}></StarshipPage>}></Route>
                <Route path='/Films/:id' element={<FilmPage films={props.films}></FilmPage>}></Route>
                <Route path='/Vehicles/:id' element={<VehiclePage vehicles={props.vehicles}></VehiclePage>}></Route>
                <Route path='/Planets/:id' element={<PlanetPage planets={props.planets}></PlanetPage>}></Route>
                <Route path='/People/:id' element={<PeoplePage people={props.people}></PeoplePage>}></Route>
                <Route path='/Species/:id' element={<SpeciesPage species={props.species}></SpeciesPage>}></Route>
                
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    )

}