import { Route, Routes} from 'react-router-dom'
import StarshipList from './StarshipList'
import ShipDetails from './StarshipPage'
import FilmList from './FilmList'
import PeopleList from './People'
import PlanetList from './Planets'
import Home from './Home'
import Header from './Header'

function Main () {
    return (
        <div className="Main">
             <div className='header-container'>
            <Header/>
        </div>
            <Routes>
                <Route path="/starships/:id" element={<ShipDetails />} />  
                <Route path='/StarshipList' element={<StarshipList/>} />
                <Route path='/FilmsList' element={<FilmList/>} />
                <Route path='/PeopleList' element={<PeopleList/>} />
                <Route path='/PlanetList' element={<PlanetList/>} />
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    )
}
export default Main