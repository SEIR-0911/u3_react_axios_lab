import { Route, Routes} from 'react-router-dom'
import StarshipList from './StarshipList'
import Home from './Home'
import Header from './Header'
import StarshipDetails from './StarshipDetails'
import Planets from './Planets'
import PlanetDetails from './PlanetDetails'
import FilmDetails from './FilmDetails'
import Films from './Films'
import Characters from './Characters'
import CharacterDetails from './CharacterDetails'
import Vehicles from './Vehicles'
import VehicleDetails from './VehicleDetails'


function Main () {

    return (
        
        <div className="main">
            <div className='header-container'>
                <Header/>
            </div>
            <Routes>
                <Route path='/starships' element={<StarshipList/>} />
                <Route path='starships/:id' element={<StarshipDetails/>} />
                <Route path='/planets' element={<Planets/>} />
                <Route path='/planets/:id' element={<PlanetDetails/>} />
                <Route path='/films' element={<Films/>} />
                <Route path='/films/:id' element={<FilmDetails/>} />
                <Route path='/characters' element={<Characters/>} />
                <Route path='/characters/:id' element={<CharacterDetails/>} />
                <Route path='/vehicles' element={<Vehicles/>} />
                <Route path='/vehicles/:id' element={<VehicleDetails/>} />
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default Main