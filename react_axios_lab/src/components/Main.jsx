import { Route, Routes } from "react-router-dom"
import  Home  from './Home'
import  StarshipsList  from './StarshipList'
import Vehicles from "./Vehicles"
import StarshipList from "./StarshipList"
import Planets from "./Planets"
import People from "./People"
import Films from "./Films"
import Species from "./Species"

export default function Main (props) {
    return(
        <div className="Main">
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/Planets' element={<Planets planets={props.planets} />}></Route>
                <Route path='/StarshipList' element={<StarshipsList ships={props.ships} />}></Route>
                <Route path='/Vehicles' element={<Vehicles vehicles={props.vehicles} />}></Route>
                <Route path='/People' element={<People people={props.people} />}></Route>
                <Route path='/Films' element={<Films films={props.films} />}></Route>
                <Route path='/Species' element={<Species species={props.species} />}></Route>

            </Routes>
        </div>
    )

}