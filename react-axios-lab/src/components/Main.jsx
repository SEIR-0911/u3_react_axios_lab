import { Route, Routes} from 'react-router-dom'
import StarshipList from './StarshipList'
import Home from './Home'
import ShipDetails from './ShipDetails'

export default function Main(){
    return(
        <div className="Main">
            <div className="routes-container">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/starships" element={<StarshipList/>} />
                <Route path="/starships/:id" element={<ShipDetails/>}/>
              </Routes>
            </div>
        </div>
    )
}