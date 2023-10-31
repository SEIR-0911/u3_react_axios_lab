import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarShipList from './routes/StarShipList'
import Planets from './routes/Planets'
import Characters from './routes/Characters'
import StarshipDetails from './routes/StarshipDetails'
import PlanetDetails from './routes/PlanetDetails'
import CharacterDetails from './routes/CharacterDetails'
import Vehicles from './routes/Vehicles'
import VehicleDetails from './routes/VehicleDetails'

export default function Main() {

    return(
        <div className='routesContainer'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/starships' element={<StarShipList/>} />
                {/* using name insteadd of id because name is easier to access, instead of having to dig it out of the url */}
                <Route path='/starships/:name' element={<StarshipDetails/>} />
                <Route path='/planets' element={<Planets/>} />
                <Route path='/planets/:name' element={<PlanetDetails/>} />
                <Route path='/characters' element={<Characters />} />
                <Route path='/characters/:name' element={<CharacterDetails/>} />
                <Route path='/vehicles' element={<Vehicles/>} />
                <Route path='/vehicles/:name' element={<VehicleDetails />} />
            </Routes>
        </div>
    )
}